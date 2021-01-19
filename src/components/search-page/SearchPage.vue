<template>
  <div>
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

    <div v-infinite-scroll="loadMore">
      <div
        v-for="row in chunkArray(visibleResults, (isMobile() ? 2 : 6))"
        class="search-results columns is-mobile">
        <div v-for="episode in row"
             :class="isMobile() ? 'is-6' : 'is-2'"
             class="search-result column">
          <a class="link" @click="() => goToEpisode(episode.id, episode.seriesId)">
            <figure class="image episode-cover">
              <img :src="require('@/assets/images/' + episode.image)" class="episode-image"/>
            </figure>
            <div class="is-size-5 container episode-title">#{{  episode.id }} {{ episode.title }} </div>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
 import debounce from 'lodash.debounce'
 import episodes from '@/data/episodes.json'
 import IsMobile from '@/mixins/IsMobile.js'
 import Fuse from 'fuse.js';
 import TheNavbar from '@/components/TheNavbar.vue'

 export default {
   name: 'SearchPage',
   mixins: [IsMobile],
   components: {
     navbar: TheNavbar,
   },
   created() {
     const query = this.$route.query.query
     if (query) {
       this.query = query
       this.performSearch()
     }
   },
   data () {
     return {
       episodes: Object.values(episodes).reverse(),
       loading: false,
       page: 1,
       //query: '',
       searchResults: Object.values(episodes).reverse(),
       visibleResults: Object.values(episodes).reverse().slice(0, 18),
     }
   },
   methods: {
     chunkArray (arr, size) {
       let chunks = []
       for(let i = 0; i < arr.length; i += size) {
         chunks.push(arr.slice(i, i+size))
       }
       return chunks
     },
     goToEpisode (episodeId, seriesId) {
       this.$router.push({ path: `episode/${episodeId}/${seriesId}` })
     },
     loadMore () {
       this.loading = true
       const episodesToAdd = this.searchResults.slice(0+(18*this.page),  18+(18*this.page))
       if (episodesToAdd.length > 0) {
         for (let episode of episodesToAdd) this.visibleResults.push(episode)
         this.page += 1
       }
       this.loading = false
     },
     performSearch () {
       this.page = 1
       this.visibleResults = []
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
       this.visibleResults =  this.searchResults.slice(0,18)
       this.loading = false
     },
     search: debounce(function () {
       this.performSearch()
     }, 500)
   }
 }
</script>

<style lang="scss" scoped>
 .episode-title {
   margin-top: 4px;
   color: white;
 }
 .episode-image {
   width: 100%;

  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 
 }
 .link {
   color: black;
 }
 ::placeholder {
   color: white
 }
 input {
   background-color: $secondary;
   color: white;
 }
 .search-results {
   margin: 4px;
 }
 img:hover {
  opacity: 0.75;
  transform: scale(1.025);
 }
</style>
