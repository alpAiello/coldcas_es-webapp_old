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
  padding: 13vh;
  background-color: #27e9c6;
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
  column-width: 70vw;
  column-gap: 10vw;
  height: 60vh;
}
.TextView {
  text-underline: none;
}
.TextView::deep(img) {
  max-height: 50vh;
  max-width: 100%;
}
.TextView::deep(h1),.TextView::deep(h2),.TextView::deep(h3),.TextView::deep(p){
  width: 70vw;
}

.TextView span {
}
</style>
