<template>
  <div class="section">
    <div>
      <h2 class="section-heading">
        We podcast for the <span class="bold-wording">love of the story.</span> Looking for more good stories yourself? <br>
        Check out some of our other recent episodes.
      </h2>
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
              <div class="description" v-line-clamp:24="3">
                {{ episodes[episodeId].description }}
              </div>
              <div class="description-link">
                See More
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

<style lang="scss" scoped>
 .bold-wording {
   color: lighten($primary, 12%);
   font-weight: bold;
 }
 .container {
   margin-bottom: 64px;
   color: black;
 }
 .description {
   color: white;
 }
 .description-link {
   cursor: pointer;
   color: lighten($primary, 10%);
   text-decoration: underline;
 }
 .description-link:hover {
   text-decoration:none;
   text-shadow: 1px 1px 1px #555;
 }
 .episode {
   margin: 16px;
 }
 .title {
   margin: 64px;
   color: white;
 }
 .section-heading {
   margin-top: 16px;
   margin-bottom: 64px;
 }
</style>
