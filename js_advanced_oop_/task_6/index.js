class Transport {
    constructor(model, price, productionYear) {
        this.model = model;
        this.price = `$${price}`;
        this.productionYear = productionYear;
    }
    getModel() {
        return this.model;
    }
    getTransportYear() {
        let carYear = (new Date()).getFullYear() - this.productionYear;
        if (carYear >= 1) {
            return carYear;
        } else if (!carYear) {
            return 1;
        }
        return 'You entered incorrect year';
    }
    getMovementType() {
        return "Air or Land Transport";
    }
}


class Truck extends Transport {
    getMovementType() {
        return "Land heavy transport";
    }
}

class Car extends Transport {
    getMovementType() {
        return "Land lightweight transport";
    }
}

class Airplane extends Transport {
    getMovementType() {
        return "Passenger air transport";
    }
}


class Mercedes extends Car {
    getMovementType() {
        return "Land lightweight passanger transport";
    }
}

class Airbus extends Airplane {
    getMovementType() {
        return "Passanger airplane";
    }
}

class Boeing extends Airplane {
    getMovementType() {
        return "Cargo and Passanger air transport";
    }
}

class Man extends Truck {
    getMovementType() {
        return "heavy transport for cargo";
    }
}

const someCar = new Mercedes("W222", 30000, 2018);
console.log(someCar.getMovementType());
console.log(someCar.getTransportYear());

// For example car sale adverb
function addCar(carWhichIWouldLikeToSell) {
    let body = document.querySelector('body')
    let mainDiv = document.createElement('div');
    mainDiv.style.background = 'aqua';
    mainDiv.style.height = '200px';
    mainDiv.style.width = '200px';
    let carPhoto = document.createElement('img');
    carPhoto.alt = "Please upload car photos"
    let description = document.createElement('p');
    description.innerText = `Model: ${carWhichIWouldLikeToSell.model} Movement Type:${carWhichIWouldLikeToSell.getMovementType()}, ${carWhichIWouldLikeToSell.getTransportYear()}Y.O `;
    mainDiv.appendChild(carPhoto);
    mainDiv.appendChild(description);
    body.appendChild(mainDiv);


}

document.onload = addCar(someCar);







// Transport, Mercedes, Boeing, Car, Truck, Man, Airplane, Airbus

// Transport:

// Truck : MAN

//Car : Mercedes

// Airplane : Airbus, Boeing
