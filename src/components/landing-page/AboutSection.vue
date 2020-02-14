<template>
  <div>
    <h1 class="title">About Us</h1>

    <div class="container">
      <div class="columns">
        <div class="column">
          <img class="about-image" src="@/assets/logo.jpg" />
        </div>
        <div class="column has-text-left-tablet">
          <div class="container">
            <h2 class="subtitle">
              We love fantasy books, possibly too much. Our aim is to provide top-notch reviews of your
              favorite fantasy books & series - Sanderson, Weeks, Rothfuss, Lynch + More!
            </h2>
            <h2 class="subtitle">
              We prioritize recently released books so we stay as relevant as possible and aim to be
              a tool for you to use as an alternative to rereads before sequels come out.
              We hope you have as much fun with this as we do!
            </h2>
            <h2 class="subtitle">
              Below is a little bit about each of us here at Fantology.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'AboutSection'
 }
</script>

<style scoped>
 .vertically-align {
   display: flex;
   align-items: center;
 }
 .container {
   margin-bottom: 64px;
 }
 .about-image {
   height: 40vh;
   border-radius: 16px;
 }
 .title {
   margin: 64px;
 }
</style>
