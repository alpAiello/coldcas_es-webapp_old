<template>
  <div id="app">
    <Sidebar :view-size="viewSizeSidebar" :projects="projects"></Sidebar>
    <ToggleButton
      id="InfoButton"
      :class="{ infoButtonClicked:infoTextVisible }"
      buttonSymbol="info"
      @toggle-event="toggleInfoText"
    ></ToggleButton>
    <PopUp
        v-show="infoTextVisible"
      id="InfoText"
      :projects="projects"
      :projectId="currentProjectNumber"
    ></PopUp>
    <router-view :projects="projects" />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar";
import ToggleButton from "@/components/UIComponents/ToggleButton";
import axios from "axios";
import PopUp from "@/components/UIComponents/PopUp";

export default {
  name: "App",
  components: {
    Sidebar,
    ToggleButton,
    PopUp,
  },
  data: () => {
    return {
      projects: [],
      viewSizeSidebar: "sidebar",
      currentProjectNumber: Number,
      infoTextVisible: Boolean,
    };
  },
  methods: {
    toggleInfoText() {
      this.infoTextVisible = !this.infoTextVisible;
    },
    getCurrentViewNumber() {
      if (this.projects.length == 0) {
        return 0;
      }
      let heightOfProject = window.innerHeight;
      let offsetOfProject = window.pageYOffset;
      let indexOfProject = Math.floor(offsetOfProject / heightOfProject);
      let contentIndexes = [];
      this.projects.forEach((project) => {
        let projectId = project.id;
        project.projectPage.forEach(() => contentIndexes.push(projectId));
      });
      let projectId = this.projects.filter(
        (project) => project.id === contentIndexes[indexOfProject]
      );
      this.currentProjectNumber = projectId[0].id;
    },
    handleScroll: () => {
      console.log(window.innerHeight);
      console.log(window.pageYOffset);
    },
  },
  async mounted() {
    const result = await axios.get(
      "https://sandy.uber.space/projects"
    );
    this.projects = result.data;
    console.log("-> result.data", result.data);
    this.getCurrentViewNumber();
    document.addEventListener("scroll", () => {
      this.getCurrentViewNumber();
    });
    this.infoTextVisible = false;
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
    top:0;
    right: 3vw;
    font-size: 4vw;
  }
}
@media (max-width: 1200px) {
  #InfoButton {
    z-index: 100;
    position: fixed;
    top:0;
    right: 3vw;
    font-size: 6vw;
  }
}
#InfoText {
}
.infoButtonClicked{
  text-decoration: underline !important;
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
