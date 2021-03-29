<template>
  <div :class="imageViewClass">
    <img
        :src="view.media.url"
        :alt="view.media.alternativeText"
    />
  </div>
</template>

<script>
export default {
  props: {
    view: Object,
    viewSize: String
  },data (){
    return {
    }
  },
  computed:{
    imageViewClass (){
      return "ImageView-" + this.viewSize
    }
  },
  name: "ImageView",
  mounted() {
    console.log("viewsize bug", this.view)
  }
};
</script>

<style >
.ImageView-main {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.ImageView-sidebar{
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.ImageView-main img, .ImageView-sidebar img {
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
}
</style>
