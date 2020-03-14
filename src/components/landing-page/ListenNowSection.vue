<template>
  <div class="section">
    <div>
      <h2 class="section-heading">
        At the very heart of it, our podcast is about the story. <br>
        We are <span class="bold-wording">readers</span> of stories, <span class="bold-wording">tellers</span> of stories and of course, <span class="bold-wording">reviewers</span> of stories.
      </h2>
    </div>
    <div class="container">
      <div class="columns is-12">
        <div class="column is-5 vertically-align has-text-left-tablet">
          <div class="columns">
            <div class="column is-12">
              <h3 class="subtitle">
                Listen to our most recent episode here.
              </h3>
              <h4 class="is-size-5">
                Love to chat about fantasy books as much as we do?
              </h4>
            </div>
          </div>
          <div class="columns is-12">
            <div class="column is-6">
              <a href="https://discordapp.com/invite/k5efNbG">
                <button class="button is-primary is-fullwidth">
                  <span class="icon is-medium">
                    <i class="fab fa-lg fa-discord"></i>
                  </span>
                  <span>Join The Community</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="column is-7">
          <youtube :video-id="episode.youtubeId" ref="youtube" :width="550" :height="450" @playing="playing"></youtube>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import episodes from '@/data/episodes.json'
 export default {
   name: 'ListenNowSection',
   data() {
     return {
       episode: Object.values(episodes).slice(-1)[0]
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
   margin-top: 64px;
   margin-bottom: 64px;
 }
 .section-heading {
   margin-top: 16px;
   margin-bottom: 48px;
 }
 .subtitle {
   margin-bottom: 16px;
 }
 .vertically-align {
   display: flex;
   flex-direction: column;
   justify-content: center;
 }
</style>
