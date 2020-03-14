<template>
  <div class="section">
    <h1 class="section-heading">Want to know more about us?</h1>

    <div class="container">
      <div class="columns">
        <div class="column">
          <a href="https://twitter.com/BenRobinson92">
            <figure class="image is-square">
              <img src="@/assets/images/ben-robinson.png" />
            </figure>
            Ben Robinson <br>
            <i class="fab fa-lg fa-twitter"></i> BenRobinson92
          </a>
        </div>
        <div class="column">
          <a href="https://twitter.com/dreamjacked">
            <figure class="image is-square">
              <img src="@/assets/images/jake-yorgason.png" />
            </figure>
            Jake Yorgason <br>
            <i class="fab fa-lg fa-twitter"></i> dreamjacked
          </a>
        </div>
        <div class="column">
          <a href="https://twitter.com/jjrobinson92">
            <figure class="image is-square">
              <img src="@/assets/images/josh-robinson.png" />
            </figure>
            Josh Robinson <br>
            <i class="fab fa-lg fa-twitter"></i> jjrobinson92
          </a>
        </div>
        <div class="column">
          <a href="https://twitter.com/ste_ph_en32">
          <figure class="image is-square">
            <img src="@/assets/images/stephen-merrill.jpeg" />
          </figure>
          Stephen Merrill <br>
          <i class="fab fa-lg fa-twitter"></i> ste_ph_en32
          </a>
        </div>
        <div class="column">
          <a href="https://twitter.com/RyantheTall">
            <figure class="image is-square">
              <img src="@/assets/images/ryan-robinson.png" />
            </figure>
            Ryan Robinson <br>
            <i class="fab fa-lg fa-twitter"></i> RyantheTall
          </a>
        </div>
      </div>
      <div class="column has-text-left-tablet">
        <div class="container about">
          <h2 class="is-size-5">
            We are Fantology.
          </h2>
          <br>
          <h2 class="is-size-5">
            At the very heart of it, our podcast is about the story. We are readers of stories, tellers of stories and of course, reviewers of stories. We podcast for the love of the story. But we’re also honest in our reviews of the stories. We’ve poured our hearts into the critically acclaimed tomes of Sanderson, Jordan & Martin. And Rothfuss, of course. But we’ve also digested scrolls so obscure that Goodreads deigns to rate them above four stars.
          </h2>
          <br>
          <h2 class="is-size-5">
            We ignored the over-saturated audio market of 2019 and started a podcast. We forgo the natural cadence of present locational conversation and instead video conference remotely. We bring you top-notch reviews of the swords and scrolls of nerd culture. We are Fantology.
          </h2>
          <h2 class="is-size-5">
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

<style lang="scss" scoped>
 a {
   cursor: pointer;
   color: white;
 }
 a:hover {
   text-decoration:none;
   text-shadow: 1px 1px 1px #555;
 }
 .about {
   margin-top: 8px;
 }
 .vertically-align {
   display: flex;
   align-items: center;
 }
 .container {
   margin-bottom: 64px;
 }
 .image  {
   margin-bottom: 4px;
 }
 .title {
   margin-top: 24px;
   margin-bottom: 64px;
   color: white;
 }
 .section-heading {
   margin-top: 16px;
   margin-bottom: 64px;
 }
</style>
