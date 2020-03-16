<template>
  <a :href="'https://twitter.com/' + twitterUsername">
    <figure class="image is-square">
      <img :src="require('@/assets/images/' + image)" />
    </figure>
    {{ fullName }} <br>
    <i class="fab fa-lg fa-twitter"></i> {{ twitterUsername  }}
  </a>
</template>

<script>
 export default {
   name: 'Profile',
   props: {
     fullName: {
       type: String,
       required: true
     },
     image: {
       type: String,
       required: true
     },
     twitterUsername: {
       type: String,
       required: true
     }
   }
 }
</script>

<style lang="scss" scoped>
 .image  {
   margin-bottom: 4px;
 }
</style>
