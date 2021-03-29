<template>
  <div class="ProjectMenu">
    <ListOfFilters @updateFilter="updateProjects($event)"></ListOfFilters>
    <div class="projects">
      <div
        class="projectContainer"
        v-for="project in filteredProjects"
        :key="project.id"
      >
        <Project :project="project" :view-size="viewSize" :only-poster="true">
        </Project>
      </div>
    </div>
  </div>
</template>

<script>
import ListOfFilters from "@/components/Sidebar/ListOfFilters";
import Project from "@/components/Project";
export default {
  data() {
    return {
      currentFilterList: Array,
    };
  },
  name: "ProjectMenu",
  components: { Project, ListOfFilters },
  props: {
    projects: Array,
    viewSize: String,
  },
  computed: {
    filteredProjects() {
      if(this.currentFilterList.length !== 0){
        const checkProjectPassFilter = (project) => {
          return project.artists.some(
              (artist) => this.currentFilterList.indexOf(artist.name) !== -1
          );
        };
      return this.projects.filter((project) => checkProjectPassFilter(project));
      } else {
        return this.projects
      }
    },
  },
  methods: {
    async updateProjects(filterList) {
      this.currentFilterList = filterList;
    },
  },
  mounted() {
    this.currentFilterList = []
    console.log("-> this.projects", this.projects);
    console.log("viewsize projectmenu", this.viewSize);
  },
};
</script>
<style scoped>
.ProjectMenu {
  background-color: #d3c0ff;
  overflow: scroll;
}
.projects {
  background-color: #d3c0ff;
  display: flex;
  flex: 1;
  flex-direction: column;
  place-items: center;
}

@media (min-width: 1200px) {
  .ProjectMenu {
    width: 50vw;
  }
  .projectContainer {
    width: 45vw;
    height: 35vw;
    margin: 1vw 2vw;
  }
}
@media (max-width: 1200px) {
  .ProjectMenu {
    width: 90vw;
  }
  .projectContainer {
    width: 80vw;
    height: 60vw;
    margin: 1vw 2vw;
  }
}
</style>
