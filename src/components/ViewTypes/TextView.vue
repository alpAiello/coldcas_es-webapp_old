<template>
  <div class="TextView">
    <span class="innerContainer" v-html="textArtHTML"></span>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

export default {
  props: {
    view: Object,
  },
  name: "ImageView",
  computed: {
    textArtHTML() {
      console.log(md.render(this.view.TextArt));
      return md.render(this.view.TextArt);
    },
  },
};
</script>

<style scoped>
.TextView {
  padding: 15vh 20px 20px 10vw;
  width: 80%;
  height:100vh;
  overflow-x: auto;
  overflow-y: scroll;
}
.innerContainer{
  display: block;
  column-width: 90vw;
  column-gap: 10vw;
  height: 70vh;
}
.TextView >>> img{
  max-height: 50vh;
}

.TextView span {
}
</style>
