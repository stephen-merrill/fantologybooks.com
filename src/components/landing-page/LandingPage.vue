<template>
  <div>
    <navbar :fixed="true" />
    <introduction/>
    <hr id="episodes" class="divider"/>

    <recent-episodes/>
    <hr id="about" class="divider"/>

    <about/>
  </div>
</template>

<script>
 import AboutSection from '@/components/landing-page/AboutSection.vue'
 import TheNavbar from '@/components/TheNavbar.vue'
 import IntroductionSection from '@/components/landing-page/IntroductionSection.vue'
 import RecentEpisodesSection from '@/components/landing-page//RecentEpisodesSection.vue'

 export default {
   name: 'LandingPage',
   components: {
     about: AboutSection,
     introduction: IntroductionSection,
     navbar: TheNavbar,
     'recent-episodes': RecentEpisodesSection
   }
 }
</script>

<style scoped>
 .divider {
   border-style: dashed;
   margin: 2rem 0;
   max-width: 100%;
   clear: both;
   max-width: 75rem;
   height: 0;
   margin: 1.25rem auto;
   border-top: 0;
   border-right: 0;
   border-bottom: 1px solid #BFBFBF;
   border-left: 0;
 }
</style>
