<template>
  <div id='app' class='row'>
    <div class='col-md-10 col-md-offset-1 text-center'>
      <h1>
        My Piano
      </h1>
      <div class='row'>
        <div class='col-md-4 col-md-offset-4'>
          <select-key> </select-key>
        </div>
      </div>
      <div class='row'> 
        <div class='col-md-2 col-md-offset-4'> 
          <select-scale> </select-scale> 
        </div>
        <div class='col-md-2'>
          <select-chord> </select-chord>
        </div> 
      </div> 
      <div id="piano">
        <piano-key 
          v-for="key in loadPiano"
          v-bind:pianoKey="key"
          :key="key.note + key.octave" 
          :class="key.class"
        > 
        </piano-key>
      </div>
      <button @click="playme">
        play me! 
      </button>
    </div>
  </div>
</template> 

<script> 
  export default {
    methods:{
      playme(){
        this.$store.dispatch('playNotes')
      }
    },
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
    z-index: 1;
    position:absolute;
  }

  .black-key:active {
    background: grey;
  }

  h1, h2, h3 {
    text-align:center;
    font-weight: normal;
  }
 /*
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
  } */
</style>