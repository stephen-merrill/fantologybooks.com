<template>
  <div>
    <navbar />
    <div class="container">
      <div :class="!isMobile() ? 'section-margin' : ''">
        <div class="columns has-text-left-tablet">
          <div class="column is-6">
            <div class="episode-info">
              <figure class="image">
                <img class="curved-image" 
                     :style="isMobile() ? 'width: 75%; margin-right:auto; margin-left: auto;' 
                                        : 'float: left; width: 33%'" 
                     :src="require('@/assets/images/' + episode.image)"/>
              </figure>
              <h1 class="subtitle" 
                  :style="isMobile() ? 'padding-top: 25px; text-align: center; font-size: 3vh' 
                                     : 'padding-top: 50px; text-align: center; font-size: 3vh'">
                #{{  episode.id }} {{ episode.title }}
                <hr :class="isMobile() ? 'mobile-hr' : 'browser-hr'">
              </h1>
              <div class="is-size-5" 
                   :style="isMobile() ? 'text-align: justify; margin-top: 1vh; margin-bottom: 3vh;' 
                                      : 'text-align: justify; float: left; margin-top: 3vh; margin-bottom: 3vh;'">
                {{ episode.description }}
              </div>
              <div :class="isMobile() ? 'columns vertically-align' : 'columns links vertically-align'">
                <div class="column is-4">
                  <a :href="episode.spotifyLink">
                    <figure class="image is-rectangle">
                      <img src="@/assets/images/spotify-badge2.png" />
                    </figure>
                  </a>
                </div>
                <div class="column is-4">
                  <a :href="episode.googleLink">
                    <figure class="image is-rectangle">
                      <img src="@/assets/images/google-badge2.png" />
                    </figure>
                  </a>
                </div>
                <div class="column is-4">
                  <a :href="episode.youtubeLink">
                    <figure class="image is-rectangle">
                      <img src="@/assets/images/youtube-badge.png" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div :style="isMobile() ? 'margin-left: auto; margin-right: auto' : 'padding-left: 5vh'" 
               class="column">
            
            <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="175" 
            style="width:100%;max-width:660px;overflow:hidden;background:transparent;" 
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation 
            allow-top-navigation-by-user-activation" 
            v-bind:src='applePlayerLink'></iframe>
            
            <div v-if="series != undefined"
                 class="continue-listening">
              <!-- <h1 class="subtitle" style="text-align: center">{{ series.title}}</h1><hr style="margin-left: 0px;"> -->
              <br>
              <div class="columns is-centered">
                <div class="column is-half is-offset-1">
                  <a class="link" @click="goToSeries(episode.seriesId)">
                    <img class="curved-image" style="width: 75%;" :src="require('@/assets/images/' + series.image)"/>
                  </a>
                  <h1 class="subtitle">{{ series.title }}</h1>
                </div>
                <div class="column is-half">
                  <a class="link" @click="() => goToEpisode(episodes[nextEp].id, episode.seriesId)">
                    <img class="curved-image" style="width: 75%;" :src="require('@/assets/images/' + episodes[nextEp].image)"/>
                  </a>
                  <h1 class="subtitle">Next Episode: #{{ episodes[nextEp].id }} <br> {{ episodes[nextEp].title }}</h1>
                </div>
              </div>
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
 import YoutubePlayer from '@/elements/YoutubePlayer.vue'
 import TheNavbar from '@/components/TheNavbar.vue'
 import FooterSection from '@/components/landing-page/FooterSection.vue'

 export default {
   name: 'EpisodePage',
   mixins: [IsMobile],
   components: {
     navbar: TheNavbar,
     myFooter: FooterSection,
     SecondaryButton,
     YoutubePlayer
   },
   methods: {
    goToSeries (seriesId) {
       this.$router.push({ path: `/series/${seriesId}/0` })
     },
    goToEpisode (episodeId, seriesId) {
       this.$router.push({ path: `/episode/${episodeId}/${seriesId}` })
     }
   },
   computed: {
    nextEp(series) {

      let currentEp = this.episode.id
      let index = 0

      for(let i = 0; i < this.series.ep.length; i++) {
        if (this.series.ep[i] == currentEp) {
          index = i
          if (index < this.series.ep.length - 1) {
            index++
          }
          else {
            index = 0
          }
        }
      }

      return this.series.ep[index]
    },
     episode () {
       return this.episodes[this.$route.params.id]
     },
     series () {
       return this.series_list[this.$route.params.series]
     },
  
     applePlayerLink () {
      let x = this.episodes[this.$route.params.id].appleLink
      let addition = "embed.";
      let position = 8;

      let output = [x.slice(0, position), addition, x.slice(position)].join('');

      return output;
     }
   },
   data () {
     return {
       episodes,
       series_list
     }
   }
 }
</script>

<style lang="scss" scoped>
 .container {
   /*margin-top: 10vh;*/
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
  margin-top: 16px;
  font-size: 3vh;
 }
 .subtitle {
   color: white;
   margin-top: 16px;
 }
 .curved-image {
  /*width: 33%;*/
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-right: 1vh
 }
 .episode-info {
  background-color: $secondary;
  padding: 3vh;
  margin-bottom: 5vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .continue-listening {
  /*background-color: $secondary;*/
  padding: 3vh;
  margin-top: 5vh;
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
  margin-bottom: 5vh;
 }
 .browser-hr {
  background-color: $primary;
  margin-left: 25vh;
  margin-right: 2vh;
  text-align: center;
 }
 .mobile-hr {
  background-color: $primary;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
 }

</style>
