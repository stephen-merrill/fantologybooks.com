<template>
  <div class="section">
    <div>
      <h2 class="section-heading">
        We podcast for the <span class="bold-wording">love of the story.</span> Looking for more good stories yourself? <br v-if="!isMobile()">
        Check out some of our other recent episodes.
      </h2>
    </div>
    <div class="container">
      <div class="columns">
        <div v-for="episodeId in recentEpisodeIds"
             :key="episodeId"
             class="column is-4 has-text-left-tablet">
          <a class="link" @click="() => goToEpisode(episodeId, episodes[episodeId].seriesId)">
            <div class="container episode">
              <img :src="require('@/assets/images/' + episodes[episodeId].image)" class="episode-logo" />
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
 import IsMobile from '@/mixins/IsMobile.js'

 export default {
   name: 'RecentEpisodesSection',
   mixins: [IsMobile],
   data() {
     return {
       episodes: episodes,
       recentEpisodeIds: recentEpisodes.episodeIds
     }
   },
   methods: {
     goToEpisode (episodeId, seriesId) {
       this.$router.push({ path: `episode/${episodeId}/${seriesId}` })
     },
   }
 }
</script>

<style lang="scss" scoped>
 .container {
   margin-bottom: 8px;
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
 .episode-logo {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .episode-logo:hover {
  opacity: 0.75;
  transform: scale(1.025);
 }
</style>
