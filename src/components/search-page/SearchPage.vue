<template>
  <div  >
    <navbar />
    <div class="field search">
      <div :class="loading ? 'is-loading' : ''"
            class="control is-large">
        <input v-model="query"
               class="input is-large"
               type="text"
               @keydown="() => loading = true"
               @keyup="search"
               placeholder="Search for an episode...">
      </div>
    </div>

    <div v-for="row in chunkArray(searchResults, 6)" class="search-results columns">
      <div v-for="episode in row" class="search-result column is-2">
        <a :href="'/episode/'+episode.id" clas="link">
          <figure class="image episode-cover">
            <img :src="episode.image" />
          </figure>
          <div class="subtitle container">#{{  episode.id }} {{ episode.title }} </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
 import debounce from 'lodash.debounce'
 import episodes from '@/data/episodes.json'
 import Fuse from 'fuse.js';
 import TheNavbar from '@/components/TheNavbar.vue'
 const ROW_LENGTH = 5
 const PAGE_LENGTH = 15

 export default {
   name: 'SearchPage',
   components: {
     navbar: TheNavbar,
   },
   data () {
     return {
       episodes: Object.values(episodes).reverse(),
       loading: false,
       query: '',
       searchResults: Object.values(episodes).reverse()
     }
   },
   methods: {
     chunkArray(arr, size) {
       let chunks = []
       for(let i = 0; i < arr.length; i += size) {
         chunks.push(arr.slice(i, i+size))
       }
       return chunks
     },
     search: debounce(function () {
       if (this.query === '') {
         this.searchResults = this.episodes
       } else {
         const options = {
           shouldSort: true,
           threshold: 0.3,
           location: 0,
           distance: 1000,
           maxPatternLength: 64,
           minMatchCharLength: 1,
           keys: [
             "author",
             "title",
             "id",
             "description"
           ]
         }

         const data = new Fuse(this.episodes, options);
         this.searchResults = data.search(this.query)
       }
       this.loading = false
     }, 500)
   }
 }
</script>

<style scoped>
 .link {
   color: black;
 }
 .search-results {
   margin: 4px;
 }
</style>
