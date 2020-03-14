<template>
  <div class="section">
    <h1 class="title">About Us</h1>

    <div class="container">
      <div class="columns">
        <div class="column">
          <figure class="image is-square">
            <img src="@/assets/images/ben-robinson.png" />
          </figure>
        </div>
        <div class="column">
          <figure class="image is-square">
            <img src="@/assets/images/jake-yorgason.png" />
          </figure>
        </div>
        <div class="column">
          <figure class="image is-square">
            <img src="@/assets/images/josh-robinson.png" />
          </figure>
        </div>
        <div class="column">
          <figure class="image is-square">
            <img src="@/assets/images/stephen-merrill.jpeg" />
          </figure>
        </div>
        <div class="column">
          <figure class="image is-square">
            <img src="@/assets/images/ryan-robinson.png" />
          </figure>
        </div>
      </div>
      <div class="column has-text-left-tablet">
        <div class="container">
          <h2 class="subtitle">
            We are Fantology.
          </h2>
          <h2 class="subtitle">
            At the very heart of it, our podcast is about the story. We are readers of stories, tellers of stories and of course, reviewers of stories. We podcast for the love of the story. But we’re also honest in our reviews of the stories. We’ve poured our hearts into the critically acclaimed tomes of Sanderson, Jordan & Martin. And Rothfuss, of course. But we’ve also digested scrolls so obscure that Goodreads deigns to rate them above four stars.
          </h2>
          <h2 class="subtitle">
            We ignored the over-saturated audio market of 2019 and started a podcast. We forgo the natural cadence of present locational conversation and instead video conference remotely. We bring you top-notch reviews of the swords and scrolls of nerd culture. We are Fantology.
          </h2>
          <h2 class="subtitle">
            You may have heard of us.
          </h2>
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
   margin-top: 24px;
   margin-bottom: 64px;
   color: white;
 }
 .subtitle {
   color: white;
 }
</style>
