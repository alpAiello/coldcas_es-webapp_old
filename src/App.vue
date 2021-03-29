<template>
  <div id="app">
      <Sidebar :view-size="viewSizeSidebar" :projects="projects"></Sidebar>
    <div class="Main">
      <Project
        :view-size="viewSizeMain"
        :only-poster="false"
        v-for="(project, index) in projects"
        :key="project.id"
        :project="projects[index]"
      ></Project>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Project";
import Sidebar from "@/components/Sidebar/Sidebar";
import axios from "axios";

export default {
  name: "App",
  data: () => {
    return {
      projects: [],
      viewSizeMain: "main",
      viewSizeSidebar: "sidebar",
    };
  },
  methods: {
    handleScroll: () => {
      console.log(window.innerHeight);
      console.log(window.pageYOffset);
    },
  },
  async mounted() {
    const result = await axios.get(
      "https://aqueous-savannah-23780.herokuapp.com/projects?_sort=projectDate:desc"
    );
    this.projects = result.data;
    console.log("-> result.data", result.data);
  },
  components: {
    Project,
    Sidebar,
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@import url("~video.js/dist/video-js.css");
@import url("./assets/videoStyles.css");
@import url("./assets/Fonts/font.css");
@import url("./assets/reset.css.css");
html {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}


#app,
body {
  font-family: "Sporting Grotesque_Regular", serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#app::-webkit-scrollbar {
  display: none;
}

</style>
