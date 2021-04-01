<template>
  <button
    class="FilterButton"
    :class="{ highlighted: tagIsSelected }"
    v-on:click="emitArtistState"
  >
    {{ artist.name }}
  </button>
</template>

<script>
export default {
  name: "FilterButton",
  data() {
    return {
      tagIsSelected: false,
    };
  },
  props: {
    artist: Object,
  },
  methods: {
    emitArtistState() {
      this.tagIsSelected = !this.tagIsSelected;
      this.tagIsSelected
        ? this.$emit("transferArtistState", {
            state: "clicked",
            artistName: this.artist.name,
          })
        : this.$emit("transferArtistState", {
            state: "not clicked",
            artistName: this.artist.name,
          });
    },
  },
  emits: { transferArtistState: Object },
};
</script>

<style scoped>
button {
  font-family: inherit; /* For all browsers */
  font-size: 13px; /* For all browsers */
  line-height: 1.15; /* For all browsers */
  margin: 0; /* Firefox and Safari have margin */
  overflow: visible; /* Edge hides overflow */
  text-transform: none; /* Firefox inherits text-transform */
  -webkit-appearance: button; /* Safari otherwise prevents some styles */
  background-color: transparent;
  padding: 0.5vw;
  border: transparent 2px solid;
}

.FilterButton {
}
.highlighted {
  border: black 2px solid;
  padding: 0.5vw;
  border-radius: 4px;
}
</style>
