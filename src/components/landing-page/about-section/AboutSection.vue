<template>
  <div class="section">
    <h1 class="section-heading">Want to know more about us?</h1>

    <div class="container">
      <div class="columns">
        <div class="column">
          <profile fullName="Ben Robinson" twitterUsername="BenRobinson92" image="ben-robinson.png" discordUsername="Wit's End"/> <br>
        </div>
        <div class="column">
          <profile fullName="Jake Yorgason" twitterUsername="dreamjacked" image="jake-yorgason.png" discordUsername="Elder Haman"/> <br>
        </div>
        <div class="column">
          <profile fullName="Josh Robinson" twitterUsername="jjrobinson92" image="josh-robinson.png" discordUsername="Shard Observer"/> <br>
        </div>
        <div class="column">
          <profile fullName="Stephen Merrill" twitterUsername="ste_ph_en32" image="stephen-avatar.png" discordUsername="Sir Savien"/> <br>
        </div>
        <div class="column">
          <profile fullName="Ryan Robinson" twitterUsername="RyantheTall" image="ryan-avatar.png" discordUsername="Anomander Rake"/> <br>
        </div>
      </div>
      <div class="column has-text-left-tablet">
        <div class="container about-container">
          <h2 class="is-size-5">
            We are Fantology.
          </h2>
          <br>
          <h2 class="is-size-5">
            At the very heart of it, our podcast is about the story. We are readers of stories, tellers of stories and of course, reviewers of stories. We podcast for the love of the story. But we’re also honest in our reviews of the stories. We’ve poured our hearts into the critically acclaimed tomes of Sanderson, Jordan & Martin. And Rothfuss, of course. But we’ve also digested scrolls so obscure that Goodreads deigns to rate them above four stars.
          </h2>
          <br>
          <h2 class="is-size-5">
            We ignored the over-saturated audio market of 2019 and started a podcast. We forgo the natural cadence of present-locational conversation and instead video conference remotely. We bring you top-notch reviews of the swords and scrolls of nerd culture. We are Fantology.
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
 import Profile from '@/components/landing-page/about-section/Profile.vue'
 export default {
   name: 'AboutSection',
   components: {
     Profile
   }
 }
</script>

<style lang="scss" scoped>
 .about-container {
   margin-top: 8px;
   margin-bottom: 64px;
 }
</style>
