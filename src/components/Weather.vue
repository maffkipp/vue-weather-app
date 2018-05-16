<template>
    <div>
        <form v-on:submit="loadWeather" action="input">
            <input v-bind="cityName" type="text" name="location-search">
            <button type="submit">Search</button>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    name: 'Weather',
    data() {
        return {
            cityName: '',
            key: 'f44e9d4e81fbd380f38ccb737f016c30'
        }
    },
    methods: {
        loadWeather() {
            let vm = this;
            console.log(`api.openweathermap.org/data/2.5/weather?q=${vm.cityName}&APPID=${vm.key}`);
            axios.get(`api.openweathermap.org/data/2.5/weather?q=${vm.cityName}&APPID=${vm.key}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
};
</script>

<style scoped>
</style>
