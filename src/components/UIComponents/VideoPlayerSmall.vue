<template>
  <div :class="videoContainer">
    <video ref="videoPlayer" class="video-js vjs-default-skin"></video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  name: "VideoPlayer",
  props: {
    viewSize: String,
    options: {
      type: Object,
      default() {
        return {
          responsive:true
        };
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

.video-js .vjs-tech{
  object-position: center;
  object-fit: cover;
}
@media (min-width: 1200px) {
  .video-js {
    height: 35vw;
    width: 45vw;
  }
}
@media (max-width: 1200px) {
  .video-js {
    width: 80vw;
    height:60vw;
    display: flex;
  }
}
</style>