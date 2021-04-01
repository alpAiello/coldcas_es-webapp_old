<template>
  <div class="PopUp">
    <h1>

      {{ getTitle }}
    </h1>
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
      const projectData = this.projects.filter((project) => {
        console.log("project.id", project.id);
        console.log("projectId", this.projectId);
        return project.id == this.projectId;
      })[0];
      return projectData.description
    },
    getTitle() {
      if (this.projects.length == 0 || this.projectId == undefined) {
        return;
      }

      console.log();
      console.log();
      const projectData = this.projects.filter((project) => {
        console.log("project.id", project.id);
        console.log("projectId", this.projectId);
        return project.id == this.projectId;
      })[0];
      return projectData.title
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
  padding: 2vw;
  filter: drop-shadow(5px 5px 10px white);
}
.PopUp p, .PopUp h1{
}

@media (min-width: 1200px) {
  .PopUp {
    top: 15vh;
    bottom: 55vh;
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