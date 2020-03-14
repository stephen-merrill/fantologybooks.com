<template>
  <div class="section">
    <div>
      <h2 class="section-heading">
        At the very heart of it, our podcast is about the story. <br>
        We are <span class="bold-wording">readers</span> of stories, <span class="bold-wording">tellers</span> of stories and of course, <span class="bold-wording">reviewers</span> of stories.
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
 .episode {
   margin: 16px;
 }
 .title {
   margin: 64px;
   color: white;
 }
 .section-heading {
   margin-top: 16px;
   margin-bottom: 48px;
 }
</style>
