<template>
  <div>
    <navbar />
    <section class="hero is-small section">
      <div class="hero-body">
        <div class="container">
          <div class="columns has-text-left-tablet">
            <div class="column is-5">
              <figure class="image ">
                <img :src="episode.image" />
              </figure>
            </div>
            <div class="column is-1" />
            <div class="column is-6">
              <h1 class="title">
                #{{  episode.id }} {{ episode.title }}
              </h1>
              <h2 class="subtitle">
                {{ episode.description }}
              </h2>
              <!-- <iframe src="https://open.spotify.com/embed-podcast/episode/4UbWktTmS5SvDcuQ8fracM"
                   width="100%"
                   height="232"
                   frameborder="0"
                   allowtransparency="true"
                   allow="encrypted-media">
                   </iframe> -->
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

<style scoped>
 .vertically-align {
   display: flex;
   align-items: center;
 }
</style>
