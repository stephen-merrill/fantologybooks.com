<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
 export default {
   name: 'app'
 }
</script>

<style lang="scss">
 #app,.app {
   /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
   font-family: "Proxima Nova","proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif !important;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: white;
   background-color: $background;
   word-wrap: break-word;
 }
</style>
