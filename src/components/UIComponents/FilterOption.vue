<template>
  <li class="FilterOption">
    <FilterButton
      @transferArtistState="transferArtistState($event)"
      :artist="artist"
    ></FilterButton>
  </li>
</template>

<script>
import FilterButton from "@/components/UIComponents/FilterButton";
export default {
  name: "FilterOption",
  components: { FilterButton },
  props: {
    artist: Object,
  },
  methods: {
    transferArtistState(artistState) {
      console.log(artistState)
      this.$emit("transferArtistState", artistState);
    },
  },
  emits: {
    transferArtistState: Array,
  },
};
</script>

<style scoped>
.FilterOption {
  flex: 1 1 5em;
  list-style: none;
}
</style>
