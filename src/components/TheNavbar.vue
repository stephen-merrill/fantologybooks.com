<template>
  <nav :class="fixed ? 'is-fixed-top' : ''"
        class="navbar is-transparent"
        role="navigation"
        aria-label="main navigation">

    <div class="navbar-brand">
      <a class="navbar-item is-size-4" href="/#home">Fantology</a>
      <div class="navbar-burger burger" data-target="navbar-options">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar-options" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Episodes
          </a>

          <div class="navbar-dropdown">
            <a v-for="link in series" :key="link.name" :href="'/series/'+link.id" class="navbar-item">
              {{ link.name }}
            </a>
            <hr class="navbar-divider">
            <a href="/search" class="navbar-item">
              All Episodes
            </a>
          </div>
        </div>
        <a class="navbar-item" href="#about">About</a>
        <a class="navbar-item">Contact</a>
        <!-- <div class="navbar-item has-dropdown is-hoverable">
             <a class="navbar-link">
             More
             </a>

             <div class="navbar-dropdown">
             <a class="navbar-item">
             About
             </a>
             <hr class="navbar-divider">
             <a class="navbar-item">
             Report an issue
             </a>
             </div>
             </div> -->
      </div>

      <div class="navbar-end">
        <a class="navbar-item social-links" href="https://podcasts.apple.com/us/podcast/id1489097985">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-apple"></i>
          </span>
        </a>
        <a class="navbar-item social-links" href="https://open.spotify.com/show/310DLxDRkTdam3fMcQtMCR?si=_4Wk59U5TWWdF19h5STreg">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-spotify"></i>
          </span>
        </a>
        <a class="navbar-item social-links" href="https://www.facebook.com/fantologybooks/">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-facebook"></i>
          </span>
        </a>
        <a class="navbar-item social-links" href="https://twitter.com/fantology_books">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-twitter"></i>
          </span>
        </a>
        <a class="navbar-item social-links" href="https://discordapp.com/invite/k5efNbG">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-discord"></i>
          </span>
        </a>
        <a class="navbar-item" href="/search/">
          <span class="icon is-medium">
            <i class="fas fa-lg fa-search"></i>
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
 import series from '@/data/series.json'
 export default {
   name: 'TheNavbar',
   props: {
     fixed: {
       type: Boolean,
       default: false,
       required: false
     }
   },
   data () {
     return {
       series: Object.values(series).filter((s) => s.displayInNav )
     }
   }
 }
</script>

<style lang="scss" scoped>
 .navbar-end {
   margin-right: 16px;
 }
 .social-links {
   padding: 8px;
 }
</style>
