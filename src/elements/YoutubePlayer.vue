<template>
  <youtube v-if="isMobile()" :video-id="id" ref="youtube" :width="getWidth()" ></youtube>
  <youtube v-else :video-id="id" ref="youtube" :width="550" :height="450"></youtube>
</template>

<script>
 import IsMobile from '@/mixins/IsMobile.js'
 export default {
   name: 'YoutubePlayer',
   mixins: [IsMobile],
   props: {
     id: {
       type: String,
       required: true
     }
   },
   methods: {
     getWidth () {
       return Math.floor(window.innerWidth * .90)
     }
   }
 }
</script>
