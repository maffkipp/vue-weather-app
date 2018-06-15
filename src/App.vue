<template>
  <div id="app">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 100px auto 0;
  z-index: 1;
  position: relative;
  padding: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  width: 50%;
}
</style>
