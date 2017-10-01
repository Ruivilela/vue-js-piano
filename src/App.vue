<template>
  <div id="app">
    <h1>
      My Piano
    </h1>
    <select-key> </select-key>
    <select-scale> </select-scale> 
    <div id="piano">
      <piano-key 
        v-for="key in loadPiano"
        v-bind:pianoKey="key"
        :key="key.note + key.octave" 
        :class="key.class"
      > 
      </piano-key>
    </div>
  </div>
</template> 
<script> 
  export default {
    computed:{
      loadPiano(){
        return this.$store.getters.load_piano
      }
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #piano {
    position:relative;
    margin-top:30px;
    right:19px;
  }

  .white-key{
    width:40px;
    height:300px;
    border:0.5px solid black;
    display:inline-block;
    position:relative;
    left:19px;
  }

  .white-key:active{
    background:#eaeaea;
  }

  .black-key{
    width:37px;
    height:200px;
    display:inline-block;
    border: 0.5px solid black;
    background:black;
    position:fixed;
    z-index: 1;
  }

  .black-key:active {
    background: grey;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
