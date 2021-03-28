<template>
  <ul class="ListOfFilters">
    <FilterOption
      v-for="artist in artists"
      :key="artist.id"
      :artist="artist"
      @transferArtistState="changeFilter($event)"
    >
    </FilterOption>
  </ul>
</template>

<script>
import FilterOption from "@/components/UIComponents/FilterOption";
import axios from "axios";
export default {
  name: "ListOfFilters",
  components: { FilterOption },
  data() {
    return {
      artists: Array,
      filter: []
    };
  },
  methods:{
    async changeFilter(artistState){
      if (artistState.state === "clicked") {
        await this.filter.push(artistState.artistName)
      } else {
        const indexOfArtist = this.filter.indexOf(artistState.artistName)
        await this.filter.splice(indexOfArtist, 1)
      }
      this.$emit("updateFilter", this.filter)
      console.log(this.filter)
    }
  },
  async mounted() {
    const result = await axios.get("http://localhost:1337/artists");
    console.log("result", result.data);
    this.artists = [...result.data];
  },
  emits:{
    updateFilter: Array
  },
};
</script>

<style scoped>
.ListOfFilters {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>