function carFactory(carOrder) {

    let car = {
        model: carOrder.model,
    };

    if (carOrder.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800,
        }
    }
    else if (carOrder.power > 90 && carOrder.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400,
        }
    }
    else if (carOrder.power > 120 && carOrder.power <= 200) {
        car.engine = {
            power: 200,
            volume: 3500,
        }
    }

    car.carriage = {
        type: carOrder.carriage,
        color: carOrder.color,
    }

    let wheelSize = carOrder.wheelsize;

    if (wheelSize % 2 == 0) {
        wheelSize--;
    }

    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return car;
}

let car = carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);

console.log(car);