<template>
  <div>
    <section class="hero section"
             style="padding-top: 18vh">
    <!-- <section class="hero is-medium is-primary is-bold section"> -->
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div v-if="isMobile()" class="column logo-container remove-margin">
              <img src="@/assets/images/transparent-logo.png" />
            </div>
            <div class="column is-two-fifths vertically-align has-text-left-tablet">
              <div v-if="!isMobile()">
                <figure>
                  <img class="logo" src="@/assets/images/transparent-logo.png"/>
                </figure>
                <h1 class="title">
                  A podcast about your favorite fantasy books.
                </h1>
                <h2 class="subtitle">
                  <span class="bold-wording">Welcome to Fantology.</span>
                </h2>
              </div>
              <div v-else>
                <h2 class="title">
                  Your fantasy book club podcast.
                </h2>
              </div>
              <div class="columns is-12 is-mobile">
                <div :class="isMobile() ? '' : 'is-5'"
                     class="column"
                     style="padding-top: 2vh">
                  <a href="https://podcasts.apple.com/us/podcast/id1489097985">
                    <figure  class="image is-rectangle">
                      <img class="badge" src="@/assets/images/apple-badge.svg" />
                    </figure>
                  </a>
                  <br>
                  <a href="https://open.spotify.com/show/310DLxDRkTdam3fMcQtMCR?si=_4Wk59U5TWWdF19h5STreg">
                    <figure class="image is-rectangle">
                      <img class="badge" src="@/assets/images/spotify-badge2.png" />
                    </figure>
                  </a>
                </div>
                <div :class="isMobile() ? '' : 'is-5'"
                     class="column"
                     style="padding-top: 2vh">
                  <a href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84MTAwODkucnNz&ved=0CAAQ4aUDahcKEwiYnvGJhpnoAhUAAAAAHQAAAAAQAQ">
                    <figure class="image is-rectangle">
                      <img class="badge" src="@/assets/images/google-badge2.png" />
                    </figure>
                  </a>
                  <br>
                  <a href="https://www.youtube.com/channel/UChnTPpjUWTS8-NUn9EQi-4A">
                    <figure class="image is-rectangle">
                      <img class="badge" src="@/assets/images/youtube-badge.png" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>

            <div v-if="!isMobile()" class="column logo-container">

              <div class="column">
                <figure class="image">
                  <img class="curved-image" src="@/assets/images/sanderson-series2.png" @click="goToSeries(1)" />
                  <br>
                  <img class="curved-image" src="@/assets/images/tolkien-series2.png" @click="goToSeries(5)" />
                  <br>
                  <img class="curved-image" src="@/assets/images/sci-fi-series2.png" @click="goToSeries(9)" />
                </figure>
              </div>
              <div class="column">
                <figure class="image">
                  <img class="curved-image" src="@/assets/images/jordan-series2.png" @click="goToSeries(2)" />
                  <br>
                  <img class="curved-image" src="@/assets/images/rowling-series2.png" @click="goToSeries(6)" />
                  <br>
                  <img class="curved-image" src="@/assets/images/ya-series2.png" @click="goToSeries(10)"/>
                </figure>
              </div>
              <div class="column">
                <figure class="image">
                  <img class="curved-image" src="@/assets/images/butcher-series2.png" @click="goToSeries(3)"/>
                  <br>
                  <img class="curved-image" src="@/assets/images/erikson-series2.png" @click="goToSeries(7)" />
                  <br>
                  <img class="curved-image" src="@/assets/images/news-series2.png" @click="goToSeries(11)"/>
                </figure>
              </div>
              <div class="column">
                <figure class="image">
                  <img class="curved-image" src="@/assets/images/abercrombie-series2.png" @click="goToSeries(4)" />
                  <br>
                  <img class="curved-image" src="@/assets/images/mcclellan-series2.png" @click="goToSeries(8)" />
                  <br>
                  <img class="curved-image" src="@/assets/images/tv-series2.png" @click="goToSeries(12)"/>
                </figure>
              </div>
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
   methods: {
    goToSeries (seriesId) {
       this.$router.push({ path: `/series/${seriesId}/0` })
     },
   },
   components: {
     SecondaryButton
   },
 }

 
</script>

<style lang="scss" scoped>
 .logo {
   width: 25vh;
   height: 25vh;
 }
 .logo-container {
   display: flex;
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
.curved-image {
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
.curved-image:hover {
  opacity: 0.75;
  transform: scale(1.1);
 }
 .badge:hover {
  opacity: 0.75;
  transform: scale(1.1);
 }

</style>
