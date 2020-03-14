<template>
  <div>
    <navbar />
    <section class="hero is-small section">
      <div class="hero-body">
          <div class="columns has-text-left-tablet vertically-align is-12">
            <div class="column is-10">
              <youtube video-id="WgItH5xRhhU" ref="youtube" @playing="playing"></youtube>
              <h1 class="title">
                #{{  episode.id }} {{ episode.title }}
              </h1>
              <h2 class="subtitle">
                {{ episode.description }}
              </h2>

              <div class="columns is-12">
                <div class="column is-4">
                  <button class="button is-primary is-inverted is-outlined is-fullwidth">
                    <span class="icon is-medium">
                      <i class="fab fa-lg fa-apple"></i>
                    </span>
                    <span>Apple Music</span>
                  </button>
                </div>
                <div class="column is-4">
                  <button class="button is-primary is-inverted is-outlined is-fullwidth">
                    <span class="icon is-medium">
                      <i class="fab fa-lg fa-spotify"></i>
                    </span>
                    <span>Spotify</span>
                  </button>
                </div>
                <div class="column is-4">
                  <button class="button is-primary is-inverted is-outlined is-fullwidth">
                    <span class="icon is-medium">
                      <i class="fab fa-lg fa-google"></i>
                    </span>
                    <span>Google</span>
                  </button>
                </div>
              </div>
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
 .title {
   color: white;
   margin-bottom: 48px;
 }
 .subtitle {
   color: white;
 }
</style>
