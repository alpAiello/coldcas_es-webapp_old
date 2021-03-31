<template>
  <div class="Spacer">
    <div class="TextView">
    <span class="innerContainer" v-html="textArtHTML"></span>
    </div>
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
.Spacer{
  padding: 10vh;
}
.TextView {
  margin: auto;
/*
  transform: translateY(15vh);
*/
  place-content: center;
  height:80vh;
  overflow-x: scroll;
}
.innerContainer{
  display: block;
  column-width: 90vw;
  column-gap: 10vw;
  height: 70vh;
}
.TextView >>> img{
  max-height: 50vh;
  max-width: 100%;
}

.TextView span {
}
</style>
