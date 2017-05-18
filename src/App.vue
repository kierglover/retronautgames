<template>
     <div id="app">
          <app-hero id="sonic" subtitle="Released November 1992" title="Sonic the Hedegehog 2" placeholder="Play Now"></app-hero>
          <app-grid id="app-grid"></app-grid>
     </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
}
</script>

<style lang="sass">
@mixin content-padding {
     padding-left: 100px;
     padding-right: 100px;
}

@mixin main-gradient {
     /* IE10+ */
     background-image: -ms-linear-gradient(top right, #78FFFF 10%, #FF19D9 100%);
/* Mozilla Firefox */
     background-image: -moz-linear-gradient(top right, #78FFFF 10%, #FF19D9 100%);
/* Opera */
     background-image: -o-linear-gradient(top right, #78FFFF 10%, #FF19D9 100%);
/* Webkit (Safari/Chrome 10) */
     background-image: -webkit-gradient(linear, right top, left bottom, color-stop(10, #78FFFF), color-stop(100, #FF19D9));
/* Webkit (Chrome 11+) */
     background-image: -webkit-linear-gradient(top right, #78FFFF 10%, #FF19D9 100%);
/* W3C Markup */
     background-image: linear-gradient(to bottom left, #78FFFF 10%, #FF19D9 100%);
}

p {
     color: black;
}

#app {
     @include main-gradient;
     line-height: 1.5;
     margin: 0 auto;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
}

#sonic {
     @include content-padding;
     background-image: url("./static/retronaut-games-sonic.jpg");
     margin-bottom: 30px;
}

#app-grid {
     @include content-padding;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
