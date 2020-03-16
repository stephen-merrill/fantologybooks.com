<template>
  <div>
    <navbar :fixed="true"/>
    <introduction/>
    <listen/>
    <hr id="recent-episodes" class="divider"/>
    <recent/>
    <hr id="about" class="divider"/>
    <about/>
    <foot/>
  </div>
</template>

<script>
 import AboutSection from '@/components/landing-page/about-section/AboutSection.vue'
 import TheNavbar from '@/components/TheNavbar.vue'
 import IntroductionSection from '@/components/landing-page/IntroductionSection.vue'
 import ListenNowSection from '@/components/landing-page/ListenNowSection.vue'
 import RecentEpisodesSection from '@/components/landing-page//RecentEpisodesSection.vue'
 import FooterSection from '@/components/landing-page/FooterSection.vue'

 export default {
   name: 'LandingPage',
   components: {
     about: AboutSection,
     foot: FooterSection,
     introduction: IntroductionSection,
     listen: ListenNowSection,
     navbar: TheNavbar,
     recent: RecentEpisodesSection
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
