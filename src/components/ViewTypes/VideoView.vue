<template>
  <div v-if="viewSize == 'main'" class="VideoView">
    <VideoPlayer :options="videoOptions"></VideoPlayer>
  </div>
  <div v-if="viewSize == 'sidebar'">
    <VideoPlayerSmall :options="videoOptions"></VideoPlayerSmall>
  </div>
</template>

<script>
import VideoPlayer from "@/components/UIComponents/VideoPlayer";
import VideoPlayerSmall from "@/components/UIComponents/VideoPlayerSmall";

export default {
  name: "VideoView",
  props: {
    view: Object,
    viewSize: String
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: 'https://sandy.uber.space' + this.view.media.video.url,
            type: this.view.media.video.mime,
          },
        ],
      },
    };
  },
  mounted() {
    console.log("viewSize",this.viewSize)
  },
  components: {
    VideoPlayer,
    VideoPlayerSmall
  },
};
</script>

<style scoped></style>
