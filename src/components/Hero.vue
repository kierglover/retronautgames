<template lang="html">
     <section class="hero is-info is-large">
       <div class="hero-body">
         <div class="container">
          <h2 class="subtitle">
               {{subtitle}}
          </h2>
          <h1 class="title">
               {{title}}
          </h1>
          <app-modal v-show="showModal" @close="showModal = false" title="Sonic the Hedgehog 2" gameUrl="http://static.arcadespot.com/embed/sonic-the-hedgehog-2/"></app-modal>
          <a @click="showModal=true" class="button is-danger is-success is-medium">{{placeholder}}</a>
         </div>
       </div>
     </section>
</template>

<script>
export default {
     props: ['subtitle', 'title', 'placeholder'],
     data(){
          return {
               showModal: false
          }
     }
}
</script>

<style scoped lang="sass">
     @mixin body-padding {
          padding-left: 75px;
          padding-right: 75px;
     }

     @mixin cover-image {
          background: url(images/bg.jpg) no-repeat center center;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
     }

     .hero {
          @include body-padding;
          @include cover-image;
               height: 90vh;
     }

</style>
