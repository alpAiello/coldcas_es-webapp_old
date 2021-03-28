<template>
  <div v-if="viewSize == 'large'" class="VideoView">
    <VideoPlayer :options="videoOptions"></VideoPlayer>
  </div>
  <div v-if="viewSize == 'small'">
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
            src: this.view.media.url,
            type: this.view.media.mime,
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
