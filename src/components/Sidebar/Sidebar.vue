<template>
  <div class="Sidebar">
    <ProjectMenu class="ProjectMenu" :view-size="viewSize" :projects="projects"></ProjectMenu>
    <div class="toggleButtonContainer">
      <ToggleButton
        class="toggleButton"
        :buttonSymbol="'+'"
        @toggle-event="toggleSidebar"
      ></ToggleButton>
    </div>
  </div>
</template>

<script>
import ToggleButton from "@/components/UIComponents/ToggleButton";
import ProjectMenu from "@/components/Sidebar/ProjectMenu";
import { gsap } from "gsap";

export default {
  name: "Sidebar",
  components: {
    ToggleButton,
    ProjectMenu,
  },
  props: {
    projects: Array,
    viewSize: String,
  },
  data() {
    return {
      projectMenuIsOpen: false,
      bodyIsScrolling: true,
    };
  },
  computed: {},
  methods: {
    toggleSidebar() {
      if (this.projectMenuIsOpen) {
        gsap.to(".Sidebar", { duration: 1, x: "0%", ease: "power4" });
        gsap.to(".toggleButton", { duration: 1, rotation: "0" });
      } else {
        const sidebarWidth = document.querySelector(".ProjectMenu").offsetWidth
        gsap.to(".Sidebar", { duration: 1, x: sidebarWidth, ease: "power4" });
        gsap.to(".toggleButton", { duration: 0.5, rotation: "45" });
      }
      let documentOverflow = document.getElementsByTagName("body")[0].style;
      this.projectMenuIsOpen = !this.projectMenuIsOpen;
      if (this.bodyIsScrolling) {
        documentOverflow["overflow-y"] = "hidden";
        this.bodyIsScrolling = false;
      } else {
        documentOverflow["overflow-y"] = "";
        this.bodyIsScrolling = true;
      }
    },
  },
  mounted() {
    console.log("this.projects",this.projects)
  }
};
</script>

<style scoped>
.Sidebar {
  position: fixed;
  top: 0;
  z-index: 200;
  display: flex;
  flex-direction: row;
  height: 100vh;
}
@media (min-width: 1200px) {
  .Sidebar {
    left: -50vw;
  }
}
@media (max-width: 1200px) {
  .Sidebar {
    left: -90vw;
  }
}
.toggleButtonContainer {
}
</style>