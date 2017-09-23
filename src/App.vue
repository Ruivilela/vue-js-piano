<template>
  <div id="app">
    <h1>
      My Piano
    </h1>
    <div id="piano">
      <piano-key class="white-key" id="C"> </piano-key>
      <piano-key class="black-key" id="C#"> </piano-key>
      <piano-key class="white-key" id="D"> </piano-key>
      <piano-key class="black-key" id="D#"> </piano-key>
      <piano-key class="white-key" id="E"> </piano-key>
      <piano-key class="white-key" id="F"> </piano-key>
      <piano-key class="black-key" id="F#"> </piano-key>
      <piano-key class="white-key" id="G"> </piano-key>
      <piano-key class="black-key" id="G#"> </piano-key>
      <piano-key class="white-key" id="A"> </piano-key>
      <piano-key class="black-key" id="A#"> </piano-key>
      <piano-key class="white-key" id="B"> </piano-key>
    </div>
  </div>
</template> 

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
