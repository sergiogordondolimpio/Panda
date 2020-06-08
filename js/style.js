const truckLight = document.getElementById('hero')
//const truckLightWhite = document.getElementById('light-effect-white')

async function lightCar(element, effect){
    element.classList.toggle(effect)
}

setInterval(lightCar,  Math.floor((10000 - 1000) * Math.random()), truckLight,'light-car-white')
setInterval(lightCar,  Math.floor((10000 - 1000) * Math.random()), truckLight,'light-car-yellow')