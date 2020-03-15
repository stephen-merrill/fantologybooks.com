<template>
  <nav :class="fixed ? 'is-fixed-top' : ''"
        class="navbar is-dark"
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
        <a class="navbar-item" href="/#listen-now">Listen Now</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Episodes
          </a>

          <div class="navbar-dropdown">
            <!-- <a v-for="link in series" :key="link.name" :href="'/series/'+link.id" class="navbar-item">
                 {{ link.name }}
                 </a>
                 <hr class="navbar-divider"> -->
            <a href="/#recent-episodes" class="navbar-item">
              Recent Episodes
            </a>
            <a class="navbar-item" @click="goToSearch">
              All Episodes
            </a>
          </div>
        </div>
        <a class="navbar-item" href="/#about">About</a>
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
        <a class="navbar-item social-links" href="https://open.spotify.com/show/310DLxDRkTdam3fMcQtMCR?si=_4Wk59U5TWWdF19h5STreg">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-youtube"></i>
          </span>
        </a>
        <a class="navbar-item social-links" href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84MTAwODkucnNz&ved=0CAAQ4aUDahcKEwiYnvGJhpnoAhUAAAAAHQAAAAAQAQ">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-google"></i>
          </span>
        </a>
        <a class="navbar-item social-links" href="https://discordapp.com/invite/k5efNbG">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-discord"></i>
          </span>
        </a>
        <a class="navbar-item social-links" href="https://twitter.com/fantology_books">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-twitter"></i>
          </span>
        </a>
        <a class="navbar-item social-links" href="https://www.facebook.com/fantologybooks/">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-facebook"></i>
          </span>
        </a>
        <div class="navbar-item field">
          <p class="control has-icons-right">
            <input v-model="searchValue" class="input" type="search" placeholder="Search..." @keyup.enter="search">
            <span class="icon is-small is-right">
              <i class="fas fa-lg fa-search"></i>
            </span>
          </p>
        </div>
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
       searchValue: '',
       series: Object.values(series).filter((s) => s.displayInNav )
     }
   },
   methods: {
     goToSearch () {
       this.$router.push({ path: '/search' })
     },
     search () {
       this.$router.push({ path: '/search', query: { query: this.searchValue } })
     }
   }
 }
</script>

<style lang="scss" scoped>
 input {
   background-color: $nav-background;
   color: white;
 }
 ::placeholder {
   color: white;
 }
 .navbar {
   background: $nav-background;
   border-bottom: 2px solid darken($nav-background, 7%);
 }
 .navbar-dropdown {
   background-color: $nav-background;
   color: white;
 }
 .navbar-item {
   color: white;
 }
 .navbar-end {
   margin-right: 16px;
 }
 .social-links {
   padding: 8px;
 }
</style>
