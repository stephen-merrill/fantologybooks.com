<template>
  <div>
    <a :href="'https://twitter.com/' + twitterUsername">
      <figure class="image is-square">
        <img :src="require('@/assets/images/' + image)" />
      </figure>
      <span class="subtitle">{{ fullName }}</span> <br>
      <i class="fab fa-lg fa-twitter twitter-username"></i> {{ twitterUsername }} <br>
    </a>
    <a href="https://discordapp.com/invite/k5efNbG">
      <i class="fab fa-lg fa-discord discord-link"></i> {{ discordUsername }}
    </a>
  </div>
</template>

<script>
 export default {
   name: 'Profile',
   props: {
     discordUsername: {
       type: String,
       required: true
     },
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
 a {
   cursor: pointer;
   color: white;
 }
 a:hover {
   text-decoration:none;
   text-shadow: 1px 1px 1px #555;
 }
 img {
   margin-bottom: 4px;
   border-radius: 15px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  img:hover {
  opacity: 0.75;
  transform: scale(1.02);
 }
 .twitter-username {
   margin-top: 6px;
 }
 .discord-link {
   margin-top: 6px;
 }
</style>
