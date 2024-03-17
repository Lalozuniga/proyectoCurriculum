// key = 7391a675a0c3e3782d9a0651925ae626
const express = require('express');
const axios = require('axios');
const cors =  require('cors');
const ics = require('ics');

const app = express();
const port = 3000;
app.listen(port, ()=>{
    console.log(`proxy escuchado en el puerto ${port}`);
});

const result = document.querySelector('.weather-info');
const form = document.querySelector('.selection-card');
const city = document.querySelector('#city');
const country = document.querySelector('#country');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(city.value);
})