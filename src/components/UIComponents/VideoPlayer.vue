<template>
  <div class="videoContainer">
    <video ref="videoPlayer" class="video-js vjs-default-skin"></video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  computed:{
    videoContainerClass (){
      return "videoContainer-" + this.viewSize
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    })
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
<style scoped>
.videoContainer{
  height: 100vh;
}
.video-js{
  height: 100%;
  width: 100%;
}
.video-js .vjs-tech{
  object-position: center;
  object-fit: cover;
}

</style>