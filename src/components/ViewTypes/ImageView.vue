<template>
  <div :class="imageViewClass">
    <img
        :src="view.media.formats[viewSize].url"
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
    console.log("viewsize bug", this.view.media.formats[this.viewSize])
  }
};
</script>

<style >
.ImageView-medium, .ImageView-large {
  height: 102vh;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.ImageView-small,.ImageView-thumbnail{
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.ImageView-medium img, .ImageView-small img, .ImageView-large img,.ImageView-thumbnail img {
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
}
</style>
