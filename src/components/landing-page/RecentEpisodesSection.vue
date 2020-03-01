<template>
  <div>
    <div>
      <h1 class="title">Check Out Some of Our Recent Episodes</h1>
    </div>
    <div class="container">
      <div class="columns">

        <div v-for="episodeId in recentEpisodeIds"
             :key="episodeId"
             class="column is-4 has-text-left-tablet">
          <a :href="'/episode/'+episodeId" class="link" >
            <div class="container episode">
              <img :src="episodes[episodeId].image" />
              <h2 class="subtitle">
                {{ episodes[episodeId].title }}
              </h2>
              <div class="description">
                {{ episodes[episodeId].description }}
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
 import recentEpisodes from '@/data/recent-episodes.json'
 import episodes from '@/data/episodes.json'
 export default {
   name: 'RecentEpisodesSection',
   data() {
     return {
       episodes: episodes,
       recentEpisodeIds: recentEpisodes.episodeIds
     }
   }
 }
</script>

<style scoped>
 .container {
   margin-bottom: 64px;
   color: black;
 }
 .episode {
   margin: 16px;
 }
 .title {
   margin: 64px;
 }
 .subtitle {
   margin-top: 16px;
 }
</style>
