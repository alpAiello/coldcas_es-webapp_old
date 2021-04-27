<template>
  <div class="inheritSize" v-if="onlyPoster">
    <ImageView
      :view-size="viewSize"
      :view="project.projectPage[0]"
      v-if="testIfImage(project.projectPage[0])"
    ></ImageView>
    <VideoView
      :view-size="viewSize"
      :view="project.projectPage[0]"
      v-if="testIfVideo(project.projectPage[0])"
    ></VideoView>
    <TextView
      :view="project.projectPage[0]"
      v-if="project.projectPage[0].media == null"
    ></TextView>
  </div>
  <div class="Project" v-if="!onlyPoster">
    <div class="View" v-for="view in project.projectPage" :key="view.id">
      <ImageView
        :view-size="viewSize"
        :view="view"
        v-if="testIfImage(view)"
      ></ImageView>
      <VideoView
        :view-size="viewSize"
        :view="view"
        v-if="testIfVideo(view)"
      ></VideoView>
      <TextView :view="view" v-if="view.media == null"></TextView>
    </div>
  </div>
</template>

<script>
import ImageView from "@/components/ViewTypes/ImageView";
import VideoView from "@/components/ViewTypes/VideoView";
import TextView from "@/components/ViewTypes/TextView";
export default {
  name: "Project",
  components: { TextView, VideoView, ImageView },
  props: {
    project: {
      type: Object,
    },
    onlyPoster: Boolean,
    viewSize: String,
  },
  data: () => {
    return {};
  },
  methods: {
    testIfImage: (view) => {
      return view.media && view.media.image;
    },
    testIfVideo: (view) => {
      return view.media && view.media.video;
    },
  },
  mounted() {
    console.log("viewsize project", this.viewSize);
  },
};
</script>
<style scoped>
.View{
  scroll-snap-align: start;
}
.inheritSize {
  width: inherit;
  height: inherit;
}
</style>
