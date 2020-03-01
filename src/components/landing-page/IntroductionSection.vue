<template>
  <div>
    <section class="hero is-small secondary section">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column vertically-align has-text-left-tablet">
              <h1 class="title is-size-1">
                Welcome to Fantology
              </h1>
              <h2 class="subtitle">
                Reviews of Your Favorite Fantasy Books & Series
              </h2>
              <div>
                <button class="button is-primary">Subscribe</button>
              </div>
            </div>
            <div class="column">
              <figure class="image">
                <img src="@/assets/images/transparent-logo.png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
 export default {
   name: 'IntroductionSection'
 }
</script>

<style lang="scss" scoped>
 /* .button {
    color: white;
    } */
 .title {
   margin-bottom: 32px;
   /* color: white; */
 }
 /* .section {
    background-color: $secondary;
    } */
 /* .subtitle {
    color: white;
    } */
 .vertically-align {
   display: flex;
   flex-direction: column;
   justify-content: center;
 }
</style>
