<template>
    <div>
        <form v-on:submit="getWeatherData" action="input">
            <input v-model="citySearch" type="text" name="location-search">
            <button type="submit">Search</button>
        </form>
        <h1>{{ weather.cityName }}</h1>
        <h2>{{ weather.temp }} {{ tempUnit }}</h2>
        <h3>{{ weather.main }}</h3>
        <p>{{ weather.description }}</p>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    name: 'Weather',
    data() {
        return {
            citySearch: '',
            key: 'f44e9d4e81fbd380f38ccb737f016c30',
            weather: {
                cityName: '',
                temp: '',
                main: '',
                description: ''
            },
            tempUnit: ''
        }
    },
    methods: {

        getWeatherData(e) {
            e.preventDefault();
            let vm = this;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${vm.citySearch}&APPID=${vm.key}`)
            .then(response => {
                vm.weather.cityName = response.data.name;
                vm.weather.temp = vm.setInitialTemp(response.data.main.temp);
                vm.weather.main = response.data.weather[0].main;
                vm.weather.description = response.data.weather[0].description;
            })
            .catch(error => console.err(error))
        },

        setInitialTemp(temp) {
            this.tempUnit = 'F';
            return (Math.round((temp * (9/5) - 459.67) * 100) / 100);
        }
    }
};
</script>

<style scoped>
</style>
