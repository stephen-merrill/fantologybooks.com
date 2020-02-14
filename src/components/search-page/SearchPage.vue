<template>
  <div>
    <navbar />
    <div class="field search">
      <div class="control is-large is-loading">
        <input class="input is-large" type="text" placeholder="Search for an Episode...">
      </div>
    </div>

    <div v-for="row in [0,1,2]" :key="'row'+row" class="tile is-ancestor">
      <div v-for="col in [0,1,2,3]"
           :key="'row'+row+'_item'+col"
           class="tile is-parent">

        <div class="tile is-child is-3">
          {{ episodes[getTableValue(row, col)] }}
        </div>

      </div>
    </div>

    <nav class="pagination" role="navigation" aria-label="pagination">
      <a class="pagination-previous" @click="previousPage">Previous</a>
      <a class="pagination-next" @click="nextPage">Next page</a>
      <ul class="pagination-list">
      </ul>
    </nav>
  </div>
</template>

<script>
 import episodes from '@/data/episdoes.json'
 import TheNavbar from '@/components/TheNavbar.vue'
 const ROW_LENGTH = 4
 const PAGE_LENGTH = 12

 export default {
   name: 'SearchPage',
   components: {
     navbar: TheNavbar,
   },
   data () {
     return {
       episodes: episodes,
       currentPage: 0
     }
   },
   methods: {
     getTableValue (row, col) {
       let pageStart = (0 + PAGE_LENGTH) * this.currentPage
       let rowStart = pageStart + (ROW_LENGTH*row)
       return rowStart + col
     },
     nextPage () {
       this.currentPage += 1
     },
     previousPage () {
       this.currentPage -= 1
     }
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
