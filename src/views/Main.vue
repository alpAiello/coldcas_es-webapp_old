<template>
  <div class="Main">
    <Project
        :view-size="viewSizeMain"
        :only-poster="false"
        v-for="(project, index) in projects"
        :key="project.id"
        :project="projects[index]"
    ></Project>
  </div>
</template>

<script>
import Project from "@/components/Project";

export default {
  name: "Main",
  props: {
    projects: Array
  },
  data: () => {
    return {
      viewSizeMain: "main",
    };
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