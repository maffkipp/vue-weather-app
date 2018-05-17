<template>
    <div>
        <form v-on:submit="getWeatherData" action="input">
            <input v-model="citySearch" type="text" name="location-search">
            <button type="submit">Search</button>
        </form>
        <div v-if="searched">
            <h1>{{ weather.cityName }}</h1>
            <h2>
                {{ weather.temp }} 
                <button v-on:click="changeTempUnit">{{ tempUnit }}</button>
            </h2>
            <h3>{{ weather.main }}</h3>
            <p>{{ weather.description }}</p>
        </div>
        <div v-else>
            <h1>Search for your city!</h1>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    name: 'Weather',
    data() {
        return {
            searched: false,
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

        // pulls in weather data from form, makes axios call, and updates data
        getWeatherData(e) {
            e.preventDefault();
            let vm = this;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${vm.citySearch}&APPID=${vm.key}`)
            .then(response => {
                vm.searched = true;
                vm.weather.cityName = response.data.name;
                vm.weather.temp = vm.setInitialTemp(response.data.main.temp);
                vm.weather.main = response.data.weather[0].main;
                vm.weather.description = response.data.weather[0].description;
            })
            .catch(error => console.err(error))
        },

        // converts initial temperature to farenheit
        setInitialTemp(temp) {
            this.tempUnit = 'F';
            let newTemp = this.roundTemp(temp * (9/5) - 459.67);
            return newTemp;
        },

        // converts temperature between farenheit and celsius
        changeTempUnit() {
            if (this.tempUnit === 'F') {
                this.tempUnit = 'C';
                this.weather.temp = this.roundTemp((this.weather.temp - 32) * (5/9));
            } else {
                this.tempUnit = 'F';
                this.weather.temp = this.roundTemp(this.weather.temp * (9/5) + 32);
            }
        },

        // rounds a number to the nearest 100th
        roundTemp(temp) {
            return Math.round(temp * 100) / 100;
        }
    }
};
</script>

<style scoped>
</style>
