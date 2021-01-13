<template>
  <section class="hero is-small section">
    <div class="hero-body">
      <div class="container">
        <hr>
        <div class="columns has-text-left-tablet is-centered">
          <div class="column is-3 is-offset-1">
            <div class="subtitle" style="margin-left: 4vh">Listen Now</div>
            <a href="https://podcasts.apple.com/us/podcast/id1489097985">
              <span class="icon is-large">
                <i class="fab fa-apple fa-2x"></i>
              </span>
            </a>
            <a href="https://open.spotify.com/show/310DLxDRkTdam3fMcQtMCR?si=_4Wk59U5TWWdF19h5STreg">
              <span class="icon is-large">
                <i class="fab fa-spotify fa-2x"></i>
              </span>
            </a>
            <a href="https://www.youtube.com/channel/UChnTPpjUWTS8-NUn9EQi-4A">
              <span class="icon is-large">
                <i class="fab fa-youtube fa-2x"></i>
              </span>
            </a>
            <a href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84MTAwODkucnNz&ved=0CAAQ4aUDahcKEwiYnvGJhpnoAhUAAAAAHQAAAAAQAQ">
              <span class="icon is-large">
                <i class="fab fa-google fa-2x"></i>
              </span>
            </a>
          </div>

          <div class="column is-3">
            <a href="/#home">
              <img class="logo" src="@/assets/images/transparent-logo.png"/>
            </a>
          </div>

          <div class="column is-3">
            <div class="subtitle" style="margin-left: 9vh">Contact Us</div>
            <a href="https://www.patreon.com/fantology_books">
              <span class="icon is-large">
                <i class="fab fa-patreon fa-2x"></i>
              </span>
            </a>
            <a href="https://discordapp.com/invite/k5efNbG">
              <span class="icon is-large">
                <i class="fab fa-discord fa-2x"></i>
              </span>
            </a>
            <a href="https://www.redbubble.com/people/fantology/shop">
              <span class="icon is-large">
                <i class="fab fa-shirtsinbulk fa-2x"></i>
              </span>
            </a>
            <a href="https://twitter.com/fantology_books">
              <span class="icon is-large">
                <i class="fab fa-twitter fa-2x"></i>
              </span>
            </a>
            <a href="https://www.facebook.com/fantologybooks/">
              <span class="icon is-large">
                <i class="fab fa-facebook fa-2x"></i>
              </span>
            </a>
            <a href="https://www.instagram.com/fantology_books/">
              <span class="icon is-large">
                <i class="fab fa-instagram fa-2x"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
 export default {
   name: 'FooterSection',
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
 .subtitle {
  
 }
 .container {
   /*margin-bottom: 64px;*/
   color: black;
 }
 .hero {
   background-color: $secondary;
 }
 .link {
   color: white
 }
 .logo {
  width: 60%;
 }
</style>
