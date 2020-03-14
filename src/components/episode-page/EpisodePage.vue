<template>
  <div>
    <navbar />
    <section class="hero is-small section">
      <div class="hero-body">
        <div class="columns has-text-left-tablet vertically-align is-12">
          <div class="column is-4 is-offset-1">
            <h1 class="subtitle">
              #{{  episode.id }} {{ episode.title }}
            </h1>
            <h2 class="is-size-5">
              {{ episode.description }}
            </h2>
            <div class="columns is-12 links">
              <div class="column is-4">
                <a :href="episode.appleLink">
                  <button class="button is-primary is-inverted is-outlined is-fullwidth">
                    <span class="icon is-medium">
                      <i class="fab fa-lg fa-apple"></i>
                    </span>
                    <span>Apple Music</span>
                  </button>
                </a>
              </div>
              <div class="column is-4">
                <a :href="episode.spotifyLink">
                  <button class="button is-primary is-inverted is-outlined is-fullwidth">
                    <span class="icon is-medium">
                      <i class="fab fa-lg fa-spotify"></i>
                    </span>
                    <span>Spotify</span>
                  </button>
                </a>
              </div>
              <div class="column is-4">
                <a :href="episode.googleLink">
                  <button class="button is-primary is-inverted is-outlined is-fullwidth">
                    <span class="icon is-medium">
                      <i class="fab fa-lg fa-google"></i>
                    </span>
                    <span>Google</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="column is-5 is-offset-1">
            <youtube :video-id="episode.youtubeId" ref="youtube" :width="700" :height="600" @playing="playing"></youtube>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
 import TheNavbar from '@/components/TheNavbar.vue'
 import episodes from '@/data/episodes.json'

 export default {
   name: 'EpisodePage',
   components: {
     navbar: TheNavbar
   },
   computed: {
     episode () {
       return this.episodes[this.$route.params.id]
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
 .title {
   color: white;
   margin-bottom: 48px;
 }
 .subtitle {
   color: white;
   margin-top: 16px;
 }
</style>
