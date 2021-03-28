<template>
  <div class="Sidebar">
    <ProjectMenu :view-size="viewSize" :projects="projects"></ProjectMenu>
    <div class="toggleButtonContainer">
      <ToggleSidebarButton
        class="toggleButton"
        :buttonSymbol="'+'"
        @toggle-sidebar="toggleSidebar"
      ></ToggleSidebarButton>
    </div>
  </div>
</template>

<script>
import ToggleSidebarButton from "@/components/UIComponents/ToggleSidebarButton";
import ProjectMenu from "@/components/Sidebar/ProjectMenu";
import { gsap } from "gsap";

export default {
  name: "Sidebar",
  components: {
    ToggleSidebarButton,
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
        gsap.to(".Sidebar", { duration: 1, x: "0vw", ease: "power4" });
        gsap.to(".toggleButton", { duration: 1, rotation: "0" });
      } else {
        gsap.to(".Sidebar", { duration: 1, x: "50vw", ease: "power4" });
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
  left: -50vw;
  z-index: 100;
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.toggleButtonContainer {
}
</style>