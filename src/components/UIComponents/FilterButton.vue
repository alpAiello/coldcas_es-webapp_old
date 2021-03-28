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
  font-size: 100%; /* For all browsers */
  line-height: 1.15; /* For all browsers */
  margin: 0; /* Firefox and Safari have margin */
  overflow: visible; /* Edge hides overflow */
  text-transform: none; /* Firefox inherits text-transform */
  -webkit-appearance: button; /* Safari otherwise prevents some styles */
}

.FilterButton {
}
.highlighted {
  background-color: #2b333f;
}
</style>
