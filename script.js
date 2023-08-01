'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

window.addEventListener('DOMContentLoaded', () => {
  const locationSuccess = pos => {
    let { latitude } = pos?.coords;
    let { longitude } = pos?.coords;
     `https://www.google.com/maps/@${latitude},${longitude}`;
  };

  const locationFailure = err => {
    console.error(err);
  };
  
  if (navigator?.geolocation) {
    navigator?.geolocation.getCurrentPosition(locationSuccess, locationFailure);
  }
  

  let cordArray = [19.1058084, 72.8907596];

  const renderMap = () => {
    let map = L.map('map').setView(cordArray, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(cordArray)
      .addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  };

  renderMap();
});

