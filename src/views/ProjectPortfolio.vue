<template>
  <div class="ProjectPortfolio">
    <Project
        :view-size="viewSizeMain"
        :project="project"
    ></Project>
  </div></template>

<script>
import Project from "@/components/Project";

export default {
  name: "ProjectPortfolio",
  props: {
    projects: Array
  },
 data: () => {
    return {
      viewSizeMain: "main",
    };
  },
  watch: {
  },
  computed: {
    project(){
      if (this.projects.length ==0){
        return {}
      }
      return this.projects.filter(project => {
        return project.id == this.$route.params.id
      })[0]
    }
  },
  methods: {
  },
  async mounted() {
  },
  components: {
    Project,
  },
  unmounted() {},
};
</script>

<style>
</style>