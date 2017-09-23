<template>
  <div id="app">
    <h1>
      My Piano
    </h1>
    <div id="piano">
      <white-key id="C"> </white-key>
      <black-key id="C#"> </black-key>
      <white-key id="D"> </white-key>
      <black-key id="D#"> </black-key>
      <white-key id="E"> </white-key>
      <white-key id="F"> </white-key>
      <black-key id="F#"> </black-key>
      <white-key id="G"> </white-key>
      <black-key id="G#"> </black-key>
      <white-key id="A"> </white-key>
      <black-key id="A#"> </black-key>
      <white-key id="B"> </white-key>
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
