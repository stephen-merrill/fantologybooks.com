<template>
  <div>
    <navbar />
  
    <!-- Tabs Model -->
    <div class="hero" style="padding-bottom: 50px">
      <div class="container">
        <div class="columns">
          <div v-if="!isMobile()"
               class="column is-one-third">
            <figure>
              <img class= "series-image" :src="require('@/assets/images/' + series.image)" />
            </figure>
          </div>
          <div v-else>
            <figure style="width: 66%; margin-left: auto; margin-right: auto;">
              <img class= "series-image" :src="require('@/assets/images/' + series.image)" />
            </figure>  
          </div>
          <div class="column"
               :style="isMobile() ? 'text-align: center' : 'padding-left: 50px;'">
            <h1 class="title">{{ series.title }}</h1>
            <hr style="background-color: #822924">
            <h2 class="subtitle" 
                style="text-align: justify; margin-left: 3vh; margin-right: 3vh">
                {{ series.description }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container" style="padding-bottom: 50px">
      <div class="columns">
        <div :class="isMobile() ? '' : 'column is-three-fifths'">
          <div :class="isMobile() ? 'tabs is-large is-fullwidth' : 'tabs is-medium is-boxed'">
            <ul>
              <li v-for="subSeries in series.subSeries"
                  v-on:click="updateSub(series.id, subSeries.id)">
                  <a v-if="subSeries.id == selectedSub"
                     style="background-color: #822924">{{ subSeries.title }}</a>
                  <a v-else>{{ subSeries.title }}</a></li>
            </ul>
          </div>
          <div class="search-results columns is-mobile is-multiline">
            <div v-if="series.subSeries[selectedSub].ep.length == 0">
              <figure class="center">
                <img style="width: 50%" :src="require('@/assets/images/coming-soon.png')"/>
              </figure>
            </div>
            <div v-for="episode in getSeries(episodes, series.subSeries[selectedSub])"
                 :class="isMobile() ? 'column is-6' : 'column is-3'">
                 <!-- :class="isMobile() ? 'is-6' : 'is-3'"> -->
              <a class="link" @click="() => goToEpisode(episode.id, series.id)">
                <figure class="image episode-cover">
                  <img :src="require('@/assets/images/' + episode.image)" 
                       :class="isMobile() ? 'mobile-image' : 'episode-image'"/>
                </figure>
                <div class="is-size-5 container episode-title">#{{  episode.id }} {{ episode.title }}</div>
              </a>
            </div>
          </div>
          
        </div>
        <div class="column">
          <div class="author">
            <div v-if="series.author.length == 1"
                 class="author-content">
              <div :class="isMobile() ? 'mobile-author' : 'author-pic'">
                <img :src="require('@/assets/images/' + series.author[0].image)"/>  
              </div>
              <div :class="isMobile() ? 'mobile-author-name' : 'author-name'">
                <h2 class="subtitle"> About the Author:<br>
                  <span style="color: #822924">
                    <b>{{ series.author[0].name }}</b>
                  </span> 
                </h2>
              </div>
              <p style="text-align: justify"> {{ series.author[0].description }} </p>
            </div>
            <div v-else
                 class="author-content">
              <div :class="isMobile() ? 'mobile-author' : 'author-pic'">
                <img :src="require('@/assets/images/' + series.author[$route.params.sub].image)"/>  
              </div>
              <div :class="isMobile() ? 'mobile-author-name' : 'author-name'">
                <h2 class="subtitle"> About the Author:<br>
                  <span style="color: #822924">
                    <b>{{ series.author[$route.params.sub].name }}</b>
                  </span> 
                </h2>
              </div>
              
              <p style="text-align: justify"> {{ series.author[$route.params.sub].description }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>

   
  <myFooter />
    
        
    
  </div>
</template>

<script>
 import episodes from '@/data/episodes.json'
 import series_list from '@/data/series.json'
 import IsMobile from '@/mixins/IsMobile.js'
 import SecondaryButton from '@/elements/SecondaryButton.vue'
 //import YoutubePlayer from '@/elements/YoutubePlayer.vue'
 import TheNavbar from '@/components/TheNavbar.vue'
 import FooterSection from '@/components/landing-page/FooterSection.vue'

 export default {
   name: 'SeriesPage',
   mixins: [IsMobile],
   components: {
     navbar: TheNavbar,
     myFooter: FooterSection
   },
   methods: {
    chunkArray (arr, size) {
       let chunks = []
       for(let i = 0; i < arr.length; i += size) {
         chunks.push(arr.slice(i, i+size))
       }
       return chunks
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
    goToEpisode (episodeId, seriesId) {
       this.$router.push({ path: `/episode/${episodeId}/${seriesId}` })
     },
    getSeries (episodes, sub) {
      let seriesArray = []
      for (let i = 0; i < sub.ep.length; i++) {
        seriesArray.push(episodes[sub.ep[i] - 1])
      }
      return seriesArray
    },
    updateSub(seriesId, subSeriesId) {
      this.$router.push({ path: `/series/${seriesId}/${subSeriesId}` })
      return this.selectedSub = subSeriesId
    }
   },
   computed: {
     episode () {
       return this.episodes[this.$route.params.id]  
     },
     series () {
       return this.series_list[this.$route.params.id - 1]
     },
     selectedSub () {
      return this.$route.params.sub
     }

   },
   data () {
     return {
       //selectedSub: this.$route.params.selected,
       episodes: Object.values(episodes),
       series_list: Object.values(series_list),
       loading: false,
       page: 1,
       visibleResults: Object.values(episodes).slice(0, 18)
       
       //episodes: Object.values(episodes).reverse(),
       //series: []
     }
   }
 }


</script>

<style lang="scss" scoped>
 .container {
   margin-top: 10vh;
 }
 .vertically-align {
   display: flex;
   align-items: center;
 }
 .links {
   margin-top: 24px;
 }
 .section-margin {
   margin-top: 10vh;
 }

 .episode-title {
   margin-top: 4px;
   color: white;
 }
 .episode-image {
   width: 100%;
   border-radius: 15px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .mobile-image {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .link {
   color: black;
 }
 ::placeholder {
   color: white
 }
 .search-results {
   margin: 4px;
 }
 .hero {
   background-color: $secondary;
 }
 .series-image {
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .logo {
   width: 35vh;
   height: 35vh;
   margin-top: 16px;
 }
 .author {
  background-color: $secondary;
 }
 .author-content {
  padding: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .author-pic {
  float: left;
  width: 50%;
  padding-right: 15px;

 }
 .author-pic img {
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .mobile-author {
  width: 75%;
  margin-right: auto;
  margin-left: auto;
 }
 .mobile-author img {
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .author-name {
  /*padding-bottom: 25px;*/
  padding-top: 85px;
  padding-bottom: 100px;
 }
 .mobile-author-name {
  padding-top: 25px;
  padding-bottom: 25px;
 }
 .tabs ul {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
 }
 .tabs a {
   align-items: center;
   color: white;
   justify-content: center
 }
 .tabs a:hover {
  border-bottom-color: $secondary;
  color: $secondary
 }
 .tabs a:active {
  color: $secondary;
 }
 .active {
  background-color: yellow;
 }
 .search-results {
  padding-left: 5px;
  padding-right: 5px;
 }

</style>
