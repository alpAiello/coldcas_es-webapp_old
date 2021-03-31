<template>
  <div class="ProjectMenu">
    <ListOfFilters @updateFilter="updateProjects($event)"></ListOfFilters>
    <div class="projects">
      <div
        v-on:mouseover="
          showDescription(
            'projectHoverText' + project.id,
          )
        "
        v-on:mouseleave="
          hideDescription(
            'projectHoverText' + project.id,
          )
        "
        class="projectContainer"
        v-for="project in filteredProjects"
        :key="project.id"
      >
        <router-link
          :to="{ name: 'ProjectPortfolio', params: { id: project.id } }"
        >
          <ProjectHoverText
            :id="'projectHoverText' + project.id"
            :project="project"
            class="ProjectHoverText"
          ></ProjectHoverText>
          <Project
            :project="project"
            :view-size="viewSize"
            :only-poster="true"
          >
          </Project>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ListOfFilters from "@/components/Sidebar/ListOfFilters";
import Project from "@/components/Project";
import ProjectHoverText from "@/components/UIComponents/ProjectHoverText";
import gsap from "gsap";
export default {
  data() {
    return {
      currentFilterList: Array,
    };
  },
  name: "ProjectMenu",
  components: { Project, ListOfFilters, ProjectHoverText },
  props: {
    projects: Array,
    viewSize: String,
  },
  computed: {
    filteredProjects() {
      if (this.currentFilterList.length !== 0) {
        const checkProjectPassFilter = (project) => {
          return project.artists.some(
            (artist) => this.currentFilterList.indexOf(artist.name) !== -1
          );
        };
        return this.projects.filter((project) =>
          checkProjectPassFilter(project)
        );
      } else {
        return this.projects;
      }
    },
  },
  methods: {
    showDescription(hoverTextId) {
      gsap.to("#" + hoverTextId, { duration: 0.1, opacity: 100 });
      gsap.to("#" + hoverTextId + ' + div', { duration: 0.1, filter: "blur(5px)" });
    },
    hideDescription(hoverTextId) {
      gsap.to("#" + hoverTextId, { duration: 0.1, opacity: 0 });
      gsap.to("#" + hoverTextId + ' + div', { duration: 0.1, filter: "none" });
    },
    async updateProjects(filterList) {
      this.currentFilterList = filterList;
    },
  },
  mounted() {
    this.currentFilterList = [];
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
    position: relative;
    width: 45vw;
    margin: 1vw 2vw;
  }

  .ProjectHoverText {
    z-index: 600;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 2vw;
    color: black;
  }
}
@media (max-width: 1200px) {
  .ProjectMenu {
    width: 90vw;
  }
  .projectContainer {
    position: relative;
    width: 80vw;
    margin: 1vw 2vw;
  }
  .ProjectHoverText {
    z-index: 600;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 2vw;
    color: black;
  }
}
</style>
