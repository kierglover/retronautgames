<template lang="html">
     <div class="card">
       <div class="card-image">
         <figure class="image is-4by3">
           <img v-bind:src="cardImage" alt="Image">
         </figure>
       </div>
       <div class="card-content">
         <div class="media">
           <div class="media-content">
            <p class="title is-4">{{title}}</p>
            <p class="subtitle is-6">{{subtitle}}</p>
           </div>
         </div>

         <div class="content">{{content}}</div>
       </div>
       <footer class="card-footer">
            <slot></slot>
       </footer>
     </div>
</template>

<script>
export default {
props: ['title', 'subtitle', 'cardImage', 'content'],
     data() {
          return {
          }
     }
}
</script>

<style lang="css">
</style>
