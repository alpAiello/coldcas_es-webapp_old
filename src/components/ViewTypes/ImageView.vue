<template>
  <div :class="imageViewClass">
    <img
        :src="view.media.formats.large.url"
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
  display: flex;
  justify-content: center;
}
.ImageView-main img {
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
}
.ImageView-sidebar img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
