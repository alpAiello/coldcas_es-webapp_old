<template>
  <div class="HoverProjectMenu">{{project.description}}</div>
</template>

<script>
export default {
  name: "HoverProjectMenu",
  props:{
    project: Object
  }
}
</script>

<style scoped>
.HoverProjectMenu{
  filter: drop-shadow(5px 5px 10px black);

}
</style>