<template>
  <nav :class="fixed ? 'is-fixed-top' : ''"
        class="navbar is-dark"
        role="navigation"
        aria-label="main navigation">

    <div class="navbar-brand">
      <a v-if="!isMobile()" href=/#home>
       <img class="image" style="width: 14vh" src="@/assets/images/fantology-scroll.png"/>
      </a>
      <a v-else class="navbar-item is-size-4" href="/#home">Fantology</a>
      <div :class="active ? 'is-active' : ''" class="navbar-burger burger" data-target="navbar-options" @click="() => active = !active">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar-options" :class="active ? 'is-active' : ''" class="navbar-menu">
      <div class="navbar-start">
        <!-- Removed Listen Now -->
        <!-- <a class="navbar-item" href="/#listen-now" @click="() => active = false">Listen Now</a> -->
        <div v-if="!isMobile()" class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Episodes
          </a>

          <div class="navbar-dropdown">
            <a href="/#recent-episodes" class="navbar-item">
              Recent Episodes
            </a>
            <a class="navbar-item" @click="goToSearch">
              All Episodes
            </a>
          </div>
        </div>
        <div v-else>
          <a href="/#recent-episodes" class="navbar-item" @click="() => active = false">
            Recent Episodes
          </a>
          <a class="navbar-item" @click="() => {active = false; goToSearch()}">
            All Episodes
          </a>
        </div>
        <!-- Add Series to Navbar -->
        <div v-if="!isMobile()" class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Series
          </a>
          <!-- Might need to add some Mobile verision conditioning -->
          <div class="navbar-dropdown">
            <div class="columns is-gapless">
              <div class="column">
                <a class="navbar-item" @click="goToSeries(1)">Sanderson</a>
                <a class="navbar-item" @click="goToSeries(3)">Butcher</a>
                <a class="navbar-item" @click="goToSeries(5)">Tolkien</a>
                <a class="navbar-item" @click="goToSeries(7)">Erikson</a>
                <hr class="navbar-divider">
                <a class="navbar-item" @click="goToSeries(9)">Sci-Fi</a>
                <a class="navbar-item" @click="goToSeries(11)">News</a>
              </div>
              <div class="column">
                <a class="navbar-item" @click="goToSeries(2)">Jordan</a>
                <a class="navbar-item" @click="goToSeries(4)">Abercrombie</a>
                <a class="navbar-item" @click="goToSeries(6)">Rowling</a>
                <a class="navbar-item" @click="goToSeries(8)">McClellan</a>
                <hr class="navbar-divider">
                <a class="navbar-item" @click="goToSeries(10)">Young Adult</a>
                <a class="navbar-item" @click="goToSeries(12)">TV Adaptation</a>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <a class="navbar-item">Featured Series</a>
          <div class="columns">
            <div style="float: left; padding-left: 10vh" class="column">
              <a @click="() => {active = false; goToSeries(1)}">Sanderson</a><br>
              <a @click="() => {active = false; goToSeries(3)}">Butcher</a><br>
              <a @click="() => {active = false; goToSeries(5)}">Tolkien</a><br>
              <a @click="() => {active = false; goToSeries(7)}">Erikson</a><br>
              <a @click="() => {active = false; goToSeries(9)}">Sci-Fi</a><br>
              <a @click="() => {active = false; goToSeries(11)}">News</a><br>
            </div>
            <div class="column">
              <a @click="() => {active = false; goToSeries(2)}">Jordan</a><br>
              <a @click="() => {active = false; goToSeries(4)}">Abercrombie</a><br>
              <a @click="() => {active = false; goToSeries(6)}">Rowling</a><br>
              <a @click="() => {active = false; goToSeries(8)}">McClellan</a><br>
              <a @click="() => {active = false; goToSeries(10)}">Young Adult</a><br>
              <a @click="() => {active = false; goToSeries(12)}">Tv Adaptation</a><br>
            </div>
          </div>
        </div><br>
        <!-- <a class="navbar-item" @click="goToSeries(4)">Series</a> -->
        <a class="navbar-item" href="/#about" @click="() => active = false">About</a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item social-links" href="https://podcasts.apple.com/us/podcast/id1489097985">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-apple"></i>
          </span>
          <span v-if="isMobile()">Apple Music</span>
        </a>
        <a class="navbar-item social-links" href="https://open.spotify.com/show/310DLxDRkTdam3fMcQtMCR?si=_4Wk59U5TWWdF19h5STreg">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-spotify"></i>
          </span>
          <span v-if="isMobile()">Spotify</span>
        </a>
        <a class="navbar-item social-links" href="https://www.youtube.com/channel/UChnTPpjUWTS8-NUn9EQi-4A">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-youtube"></i>
          </span>
          <span v-if="isMobile()">Youtube</span>
        </a>
        <a class="navbar-item social-links" href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84MTAwODkucnNz&ved=0CAAQ4aUDahcKEwiYnvGJhpnoAhUAAAAAHQAAAAAQAQ">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-google"></i>
          </span>
          <span v-if="isMobile()">Google</span>
        </a>
        <a class="navbar-item social-links" href="https://www.patreon.com/fantology_books">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-patreon"></i>
          </span>
          <span v-if="isMobile()">Patreon</span>
        </a>
        <a class="navbar-item social-links" href="https://discordapp.com/invite/k5efNbG">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-discord"></i>
          </span>
          <span v-if="isMobile()">Discord</span>
        </a>
        <a class="navbar-item social-links" href="https://www.redbubble.com/people/fantology/shop">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-shirtsinbulk"></i>
          </span>
          <span v-if="isMobile()">Merch</span>
        </a>
        <a class="navbar-item social-links" href="https://twitter.com/fantology_books">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-twitter"></i>
          </span>
          <span v-if="isMobile()">Twitter</span>
        </a>
        <a class="navbar-item social-links" href="https://www.facebook.com/fantologybooks/">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-facebook"></i>
          </span>
          <span v-if="isMobile()">Facebook</span>
        </a>
        <a class="navbar-item social-links" href="https://www.instagram.com/fantology_books/">
          <span class="icon is-medium">
            <i class="fab fa-lg fa-instagram"></i>
          </span>
          <span v-if="isMobile()">Instagram</span>
        </a>
        <div v-if="!isMobile()" class="navbar-item field">
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
 import IsMobile from '@/mixins/IsMobile.js'

 export default {
   name: 'TheNavbar',
   mixins: [IsMobile],
   props: {
     fixed: {
       type: Boolean,
       default: false,
       required: false
     }
   },
   data () {
     return {
       active: false,
       searchValue: '',
       series: Object.values(series).filter((s) => s.displayInNav )
     }
   },
   methods: {
     goToSearch () {
       this.$router.push({ path: '/search' })
     },
     // goToSeries method
     goToSeries (seriesId) {
       this.$router.push({ path: `/series/${seriesId}/0`})
     },
     search () {
       this.$router.push({ path: '/search', query: { query: this.searchValue } })
       location.reload()
     }
   }
 }
</script>

<style lang="scss" scoped>
 input {
   /*background-color: $primary;*/
   background-color: $nav-background;
   color: white;
 }
 ::placeholder {
   color: white;
 }
 .navbar, .navbar-menu {
  background: $nav-background
   /*background: $primary;*/
 }
 .navbar {
   border-bottom: 2px solid darken($nav-background, 7%);
 }
 /*Edit Navbar Margins*/
 .navbar-brand {
   margin-left: 25px;
   margin-right: 25px;
 }
 .navbar-dropdown {
   background-color: $nav-background;
   padding: 5px;
   color: white;
 }
 .navbar-item {
   color: white;
   text-align: left;
 }
 .navbar-item a:hover {
  background-color: hsl(0, 0%, 15%);
  color: white;
 }
 .navbar-end {
   margin-right: 16px;
 }
 .social-links {
   padding: 8px;
 }
 hr {
  background-color: hsl(0, 0%, 50%);
  margin-top: 15px;
 }

</style>
