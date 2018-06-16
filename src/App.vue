<template>
  <div id="app">
    <h1 id="page-header">WeatherVue</h1>
    <Weather/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Weather from './components/Weather';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Weather,
  },
};
</script>

<style>
#page-header {
  font-size: 50px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #35495E;
  z-index: 1;
  position: relative;
}

@media only screen and (max-width: 600px) {
  #page-header {
    font-size: 40px;
  }
}
</style>
