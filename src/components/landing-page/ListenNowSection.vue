<template>
  <div class="section">
    <div>
      <h2 class="section-heading">
        At the very heart of it, our podcast is about the story. <br>
        We are <span class="bold-wording">readers</span> of stories, <span class="bold-wording">tellers</span> of stories and of course, <span class="bold-wording">reviewers</span> of stories.
      </h2>
    </div>
    <!-- Do we always want fluid? -->
    <div class="container">
      <div class="columns">
        <div v-if="isMobile()" class="column is-7">
          <youtube-player :id="episode.youtubeId"/>
        </div>
        <div class="column is-5 vertically-align has-text-left-tablet">
          <div class="columns">
            <div class="column is-12">
              <h3 class="subtitle">
                Listen to our most recent episode, and let us know what you think.
              </h3>
              <h4 v-if="!isMobile()" class="is-size-5">
                <span class="bold-wording">Join us on our discord server</span> after checking out our latest podcast on your favorite app.
              </h4>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <a href="https://discordapp.com/invite/k5efNbG">
                <figure class="curved-image">
                  <img src="@/assets/images/discord-badge-purple.png" />
                  <!-- <img src="@/assets/images/discord-logo.png" /> -->
                </figure>
              </a>
            </div>
            <div class="column is-6">
              <a href="https://www.patreon.com/fantology_books">
                <figure class="curved-image">
                  <img src="@/assets/images/patreon-logo.jpg" />
                  <!-- <img src="@/assets/images/discord-logo.png" /> -->
                </figure>
              </a>
            </div>
          </div>  
        </div>
        <div v-if="!isMobile()" class="column is-7">
          <youtube-player :id="episode.youtubeId"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import episodes from '@/data/episodes.json'
 import IsMobile from '@/mixins/IsMobile.js'
 import SecondaryButton from '@/elements/SecondaryButton.vue'
 import YoutubePlayer from '@/elements/YoutubePlayer.vue'

 export default {
   name: 'ListenNowSection',
   mixins: [IsMobile],
   components: {
     SecondaryButton,
     YoutubePlayer
   },
   data() {
     return {
       episode: Object.values(episodes).slice(-1)[0]
     }
   }
 }
</script>

<style lang="scss" scoped>
 .container {
   margin-top: 64px;
   margin-bottom: 8px;
 }
 iframe {
   max-width: 90vh;
 }
 .subtitle {
   margin-bottom: 16px;
 }
 .vertically-align {
   display: flex;
   flex-direction: column;
   justify-content: center;
 }
 .curved-image {
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .curved-image:hover {
  opacity: 0.75;
  transform: scale(1.1);
 }
</style>
