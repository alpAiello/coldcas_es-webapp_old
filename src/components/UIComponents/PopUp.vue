<template>
  <div class="PopUp">
    <p class="popUpText">
      {{ getAboutText }}
    </p>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: {
    projects: Object,
    projectId: Number,
  },
  computed: {
    getAboutText() {
      if (this.projects.length == 0 || this.projectId == undefined) {
        return;
      }

      console.log();
      console.log();
      return this.projects.filter((project) => {
        console.log("project.id", project.id);
        console.log("projectId", this.projectId);
        return project.id == this.projectId;
      })[0].description;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.PopUp {
  z-index: 50;
  position: fixed;
  right: 0;
  color: white;
  background-color: rgba(50, 50, 50, 0.7);
  backdrop-filter: drop-shadow(2px 2px 3px);
  padding: 2vw;
}

@media (min-width: 1200px) {
  .PopUp {
    top: 15vh;
    bottom: 65vh;
    width: 20vw;
  }
  .popUpText {
    font-size: 16px;
  }
}
@media (max-width: 1200px) {
  .PopUp {
    top: 15vh;
    bottom: 65vh;
    width: 60vw;
  }
  .popUpText {
    font-size: 12px;
  }
}
</style>