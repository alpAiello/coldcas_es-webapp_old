<template>
  <button class="ToggleButton" @click="toggleEvent">
    {{ buttonSymbol }}
  </button>
</template>

<script>
export default {
  props: {
    buttonSymbol: String,
    toggleOn: Boolean,
  },
  name: "ToggleSidebarButton",
  emits: { "toggle-event": false },
  methods: {
    toggleEvent() {
      this.$emit("toggle-event");
    },
  },
};
</script>

<style scoped>
.ToggleButton {
  color: black;
  cursor: pointer;
  border: 0;
  padding: 0;
  font-family: inherit;
  width: 10vw;
  height: 10vw;
  background-color: transparent;
  filter: drop-shadow(5px 5px 10px black);
}
@media (min-width: 1200px) {
  .ToggleButton{
  height: 10vh;
  width: 10vw;
  font-size: 8vw;
  }
}
@media (max-width: 1200px) {
  .ToggleButton{
    height: 10vh;
    width: 15vw;
    font-size: 18vw;
  }}
.closeSidebarDesign {
}
.openSidebarDesign {
}
</style>
