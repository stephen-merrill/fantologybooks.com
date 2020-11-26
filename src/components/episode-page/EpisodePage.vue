<template>
  <div>
    <navbar />
    <div
      :class="!isMobile() ? 'section-margin' : ''"
      class="section">
      <div class="columns has-text-left-tablet is-12">
        <div v-if="isMobile()" class="column">
          <youtube-player :id="episode.youtubeId"/>
        </div>
        <div class="column is-4 is-offset-0">
          <h1 class="subtitle">
            #{{  episode.id }} {{ episode.title }}
          </h1>
          <div class="is-size-5">
            {{ episode.description }}
          </div>
          <div class="columns is-12 links is-mobile">
            <div class="column is-4">
              <a :href="episode.appleLink">
                <figure class="image is-rectangle">
                  <img src="@/assets/images/apple-badge.svg" />
                </figure>
              </a>
            </div>
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
                  <img src="@/assets/images/google-badge.png" />
                </figure>
              </a>
            </div>
          </div>
        </div>
        <div v-if="!isMobile()" class="column is-5 is-offset-1">
          <youtube-player :id="episode.youtubeId"/>
        </div>
      </div>
    </div>
    <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="175" 
            style="width:100%;max-width:660px;overflow:hidden;background:transparent;" 
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
            v-bind:src='applePlayerLink'></iframe>
  </div>
</template>

<script>
 import episodes from '@/data/episodes.json'
 import IsMobile from '@/mixins/IsMobile.js'
 import SecondaryButton from '@/elements/SecondaryButton.vue'
 import YoutubePlayer from '@/elements/YoutubePlayer.vue'
 import TheNavbar from '@/components/TheNavbar.vue'

 export default {
   name: 'EpisodePage',
   mixins: [IsMobile],
   components: {
     navbar: TheNavbar,
     SecondaryButton,
     YoutubePlayer
   },
   computed: {
     episode () {
       return this.episodes[this.$route.params.id]
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
       episodes
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
 .subtitle {
   color: white;
   margin-top: 16px;
 }
</style>
