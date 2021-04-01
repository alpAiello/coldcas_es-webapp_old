<template>
  <div class="ProjectPortfolio">
    <router-link :to=
'{name: "Main"}'>
      <ToggleButton
        class="backButton"
        :button-symbol="'&#8592;' + 'home'"
      ></ToggleButton>
    </router-link>
    <Project :view-size="viewSizeMain" :project="project"></Project>
  </div>
</template>

<script>
import Project from "@/components/Project";
import ToggleButton from "@/components/UIComponents/ToggleButton";

export default {
  name: "ProjectPortfolio",
  components: {
    Project,
    ToggleButton,
  },
  props: {
    projects: Array,
  },
  data: () => {
    return {
      viewSizeMain: "main",
    };
  },
  watch: {},
  computed: {
    project() {
      if (this.projects.length == 0) {
        return {};
      }
      return this.projects.filter((project) => {
        return project.id == this.$route.params.id;
      })[0];
    },
  },
  methods: {},
  async mounted() {
  },
  unmounted() {},
};
</script>

<style>
.backButton {
  z-index: 100;
  position: fixed;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);
}
.backButton {
  font-size: 2vh !important;
  height: 5vh !important;
}
</style>
