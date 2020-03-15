<template>
  <div>
    <section class="hero is-small section">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column vertically-align has-text-left-tablet">
              <h1 class="title">
                A podcast about your favorite fantasy books.
              </h1>
              <h2 class="subtitle">
                Welcome to Fantology.
              </h2>
              <div class="columns is-12">
                <div class="column is-6">
                  <a href="#listen-now">
                    <button class="button is-primary is-fullwidth">Listen Now</button>
                  </a>
                </div>
              </div>
              <div class="columns is-12">
                <div class="column is-3">
                  <a href="https://podcasts.apple.com/us/podcast/id1489097985">
                    <button class="button is-primary is-inverted is-outlined is-fullwidth">
                      <span class="icon is-medium">
                        <i class="fab fa-lg fa-apple"></i>
                      </span>
                      <span>Apple Music</span>
                    </button>
                  </a>
                </div>
                <div class="column is-3">
                  <a href="https://open.spotify.com/show/310DLxDRkTdam3fMcQtMCR?si=_4Wk59U5TWWdF19h5STreg">
                    <button class="button is-primary is-inverted is-outlined is-fullwidth">
                      <span class="icon is-medium">
                        <i class="fab fa-lg fa-spotify"></i>
                      </span>
                      <span>Spotify</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="column logo-container">
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
 export default {
   name: 'IntroductionSection'
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
 .vertically-align {
   display: flex;
   flex-direction: column;
   justify-content: center;
 }
</style>
