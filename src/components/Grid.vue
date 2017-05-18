<template lang="html">
     <div id="wrapper">
          <div class="tile is-ancestor">
               <div class="tile is-parent">
                    <app-card title="Harvest Moon" subtitle="Released 1996" content="Wanting to escape the hustle and bustle of day to day life? Slow things down a little bit with the orginal Harvest Moon released on SNES in 1996." cardImage="./static/retronaut-games-harvest-moon-snes.jpg">
                         <p class="card-footer-item">
                              <span>
                                   <app-modal v-show="showHarvestModal" v-on:close="showHarvestModal = false" title="Harvest moon" gameUrl="http://static.arcadespot.com/embed/harvest-moon/"></app-modal>
                                   <a v-on:click="showHarvestModal=true">Play Now</a>
                              </span>
                         </p>
                    </app-card>
               </div>
               <div class="tile is-parent">
                    <app-card title="Super Mario Bros" subtitle="Released 1985" content="Enjoy the ultimate retro game experience and enjoy jumping down memory lane. Play the orginal Super Mario Bros released on the NES in 1985" cardImage="./static/retronaut-games-super-mario.jpg">
                         <p class="card-footer-item">
                              <span>
                                   <app-modal v-show="showMarioModal" v-on:close="showMarioModal = false" title="Super Mario Bros" gameUrl="http://static.arcadespot.com/embed/super-mario-bros/"></app-modal>
                                   <a v-on:click="showMarioModal=true">Play Now</a>
                              </span>
                         </p>
                    </app-card>
               </div>
               <div class="tile is-parent">
                    <app-card title="Doom" subtitle="Released 1985" content="Enjoy the ultimate retro game experience and enjoy jumping down memory lane. Play the orginal Super Mario Bros released on the NES in 1985" cardImage="./static/retronaut-games-super-mario.jpg">
                         <p class="card-footer-item">
                              <span>
                                   <app-modal v-show="showDoomModal" v-on:close="showDoomModal = false" title="Super Mario Bros" gameUrl=""></app-modal>
                                   <a v-on:click="showDoomModal=true">Play Now</a>
                              </span>
                         </p>
                    </app-card>
               </div>
          </div>
     </div>
</template>

<script>
import Card from './Card.vue'
export default {
     components: {
          'app-card': Card
     },
     data() {
          return {
               showHarvestModal: false,
               showMarioModal:false,
               showDoomModal: false
          }
     }
}
</script>

<style lang="sass" scoped>
</style>
