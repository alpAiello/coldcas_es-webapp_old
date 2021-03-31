<template>
  <div id="app">
    <Sidebar :view-size="viewSizeSidebar" :projects="projects"></Sidebar>
    <ToggleButton id="InfoButton" buttonSymbol="about" @toggle-event="getCurrentViewNumber"></ToggleButton>
    <router-view :projects="projects"/>
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar/Sidebar";
import ToggleButton from "@/components/UIComponents/ToggleButton";
import axios from "axios";


export default {
  name: "App",
  data: () => {
    return {
      projects: [],
      viewSizeSidebar: "sidebar",
    };
  },
  methods: {
    getCurrentViewNumber (){
      let heightOfProject = window.innerHeight
      let offsetOfProject = window.pageYOffset
      let indexOfProject = offsetOfProject / heightOfProject
      let contentIndexes = []
      this.projects.forEach(project => {
        let projectId = project.id
        project.content.forEach(() => contentIndexes.push(projectId))
      })
      let projectId = this.projects.filter(project => project.id == contentIndexes[indexOfProject])
      console.log(projectId[0].title)

      console.log("-> projectSizes", contentIndexes);
      console.log("-> indexOfProject", indexOfProject);
      /*
            let nameOfProject = projects.filter(project => project)
      */

      console.log("-> heightOfDocument", offsetOfProject);
    console.log("-> heightOfProject", heightOfProject);
    let numberOfProjects = 0
    console.log("-> numberOfProjects", numberOfProjects);

    console.log(document.documentElement.scrollTop)
    },
    handleScroll: () => {
      console.log(window.innerHeight);
      console.log(window.pageYOffset);
    },
  },
  async mounted() {
    const result = await axios.get(
        "https://coldcases-cms.herokuapp.com/projects?_sort=projectDate:desc"
    );
    this.projects = result.data;
    console.log("-> result.data", result.data);
  },
  components: {
    Sidebar,
    ToggleButton
  },
  unmounted() {},
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
@media (min-width: 1200px) {
  #InfoButton {
    z-index: 500;
    position: fixed;
    right: 5vw;
    font-size: 3vw;
  }
}
@media (max-width: 1200px) {
  #InfoButton {
    z-index: 100;
    position: fixed;
    right: 5vw;
    font-size: 5vw;
  }
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

