<template>
  <div>
    <section class="hero is-small section">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div v-if="isMobile()" class="column logo-container remove-margin">
              <img src="@/assets/images/transparent-logo.png" />
            </div>
            <div class="column vertically-align has-text-left-tablet">
              <div v-if="!isMobile()">
                <h1 class="title">
                  A podcast about your favorite fantasy books.
                </h1>
                <h2 class="subtitle">
                  Welcome to Fantology.
                </h2>
              </div>
              <div v-else>
                <h2 class="title">
                  Your fantasy book club podcast.
                </h2>
              </div>
              <div class="columns is-12">
                <div class="column is-6">
                  <a href="#listen-now">
                    <button class="button is-primary is-fullwidth">Listen Now</button>
                  </a>
                </div>
              </div>
              <div class="columns is-12 is-mobile">
                <div
                  :class="isMobile() ? '' : 'is-3'"
                  class="column">
                  <secondary-button
                    href="https://podcasts.apple.com/us/podcast/id1489097985"
                    icon="fab fa-lg fa-apple"
                    text="Apple"/>
                </div>
                <div
                  :class="isMobile() ? '' : 'is-3'"
                  class="column">
                  <secondary-button
                    href="https://open.spotify.com/show/310DLxDRkTdam3fMcQtMCR?si=_4Wk59U5TWWdF19h5STreg"
                    icon="fab fa-lg fa-spotify"
                    text="Spotify"/>
                </div>
              </div>
            </div>
            <div v-if="!isMobile()" class="column logo-container">
              <figure class="image logo">
                <img src="@/assets/images/transparent-logo.png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div id="listen-now"/>
    </section>
  </div>
</template>

<script>
 import IsMobile from '@/mixins/IsMobile.js'
 import SecondaryButton from '@/elements/SecondaryButton.vue'
 export default {
   name: 'IntroductionSection',
   mixins: [IsMobile],
   components: {
     SecondaryButton
   }
 }
</script>

<style lang="scss" scoped>
 .logo {
   width: 50vh;
   height: 50vh;
   margin-top: 16px;
 }
 .logo-container {
   display: flex;
   flex-direction: row;
   justify-content: center;
 }
 .hero {
   background-color: $secondary;
 }
 .remove-margin {
   margin-bottom: -24px;
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
