import CarController from './auto.js';

document.addEventListener('DOMContentLoaded', () => {
    const exampleDisplay = document.getElementById('example');

    const carController = new CarController();

    exampleDisplay.textContent = carController.getExample();
});
