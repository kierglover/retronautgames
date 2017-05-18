<template lang="html">
     <div class="modal is-active">
       <div class="modal-background"></div>
          <div class="modal-card">
               <header class="modal-card-head">
                    <p class="modal-card-title">{{title}}</p>
                    <button class="modal-close" v-on:click="$emit('close')"></button>
               </header>
               <section class="modal-card-body">
                    <iframe height="448" width="860" v-bind:src="gameUrl" style="border:none;" frameborder="0" scrolling="no"></iframe>
               </section>
          </div>
     </div>
</template>

<script>
export default {
     props:['title', 'gameUrl'],
     data(){
          return {
          }
     }
}
</script>

<style lang="sass" scoped>

     .modal-background {
          background-color: black;
          opacity: 0.9;
     }
     .modal-card  {
          width: 75%;
     }

     .modal-card-body {
          background-color: transparent;
     }

     .modal-card-head {
          background-color: transparent;
          border: none;
     }

     .modal-card-title {
          color: white;
     }

</style>
