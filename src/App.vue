<template>
  <div id="app">
    <canvas></canvas>
    <Weather/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Weather from './components/Weather';
import './canvas.js';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Weather,
  },
};
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
</style>
