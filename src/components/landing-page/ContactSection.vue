<template>
  <section class="hero is-small section">
    <div class="hero-body">
      <div class="container">
        <div class="columns has-text-left-tablet">
          <div class="column is-4 is-offset-1">
            <div class="subtitle">Fantology</div>
            <div class="link"><a href="#home">Home</a></div>
            <div class="link"><a href="#listen-now">Listen</a></div>
            <div class="link"><a href="/search">Episodes</a></div>
            <div class="link"><a href="#about">About</a></div>
          </div>
          <div class="column is-4">
            <div class="subtitle">Contact Us</div>
            <div class="link"><a href="https://discordapp.com/invite/k5efNbG">Discord</a></div>
            <div class="link"><a href="https://twitter.com/fantology_books">Twitter</a></div>
            <div class="link"><a href="https://www.facebook.com/fantologybooks/">Facebook</a></div>
          </div>
          <div class="column is-4">
            <div class="subtitle">Listen Now</div>
            <div class="link"><a href="https://podcasts.apple.com/us/podcast/id1489097985">Apple</a></div>
            <div class="link"><a href="https://open.spotify.com/show/310DLxDRkTdam3fMcQtMCR?si=_4Wk59U5TWWdF19h5STreg">Spotify</a></div>
            <div class="link"><a href="https://open.spotify.com/show/310DLxDRkTdam3fMcQtMCR?si=_4Wk59U5TWWdF19h5STreg">Youtube</a></div>
            <div class="link"><a href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84MTAwODkucnNz&ved=0CAAQ4aUDahcKEwiYnvGJhpnoAhUAAAAAHQAAAAAQAQ">Google</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
 export default {
   name: 'ContactSection',
 }
</script>

<style lang="scss" scoped>
 a {
   cursor: pointer;
   color: lighten($primary, 10%);
   text-decoration: underline;
 }
 a:hover {
   text-decoration:none;
   text-shadow: 1px 1px 1px #555;
 }
 .container {
   margin-bottom: 64px;
   color: black;
 }
 .hero {
   background-color: $secondary;
 }
 .link {
   color: white
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
