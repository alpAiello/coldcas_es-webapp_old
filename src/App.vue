<template>
  <div id="app">
    <Sidebar :view-size="viewSizeSidebar" :projects="projects"></Sidebar>
    <router-view :projects="projects"/>
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar/Sidebar";
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
.router-link{
  z-index:500;
  position: relative;
  top: 0 ;
  left: 0;
}

</style>

