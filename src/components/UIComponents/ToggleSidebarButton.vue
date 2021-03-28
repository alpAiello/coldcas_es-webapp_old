<template>
  <button class="ToggleSidebarButton" @click="toggleSidebar">
    {{ buttonSymbol }}
  </button>
</template>

<script>
export default {
  data() {},
  props: {
    buttonSymbol: String,
    sideBarIsOpen: Boolean,
  },
  name: "ToggleSidebarButton",
  emits: { "toggle-sidebar": false },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>

<style scoped>
.ToggleSidebarButton {
  border: 0;
  padding: 0;
  font-size: 8vw;
  font-family: inherit;
  width: 10vw;
  height: 10vw;
  background-color: transparent;
}
.closeSidebarDesign {
}
.openSidebarDesign {
}
</style>
