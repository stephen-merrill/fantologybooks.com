<template>
  <a :href="href">
    <button class="button is-primary is-inverted is-outlined is-fullwidth">
      <span class="icon is-medium">
        <i :class="icon"></i>
      </span>
      <span>{{ text }}</span>
    </button>
  </a>
</template>

<script>
 export default {
   name: 'SecondaryButton',
   props: {
     href: {
       type: String,
       default: '',
       required: false
     },
     icon: {
       type: String,
       required: true
     },
     text: {
       type: String,
       required: true
     }
   }
 }
</script>

<style lang="scss" scoped>
</style>
