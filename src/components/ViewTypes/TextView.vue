<template>
  <div class="TextView">
    <span v-html="textArtHTML"></span>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it"
const md= new MarkdownIt()

export default {
  props: {
    view: Object
  },
  name: "ImageView",
  computed: {
    textArtHTML(){
      console.log(md.render(this.view.TextArt))
      return md.render(this.view.TextArt)

    }
}}

</script>

<style scoped>
.TextView {
height:100vh;
}
.TextView >>> p{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.TextView >>> *{
  display: flex;
  flex-direction: column;
  height: 100%;
overflow: hidden;
  margin: 0 1vw;
}
.TextView >>> img{
  width: 100%;
  height:inherit;
  object-position: center;
  object-fit: cover;
  margin: 0;
}
.TextView span{
}
</style>