class Animal {
    constructor(food, location) {
        this.food = food;
        this.location = location;
    }

    makeNoise() {
        return "This animal sleeps";

    }

    eat() {
        return `This animal eat different food`;
    }

    sleep() {
        return true;
    }


}

class Dog extends Animal {
    eat() {
        return `Dog eat meat`
    }
    makeNoise() {
        return "Woof-Woof"
    }
}

class Horse extends Animal {
    eat() {
        return `Horse eat carrot`
    }
    makeNoise() {
        return "Brrrrrrrrrrrr"
    }
}

class Cat extends Animal {
    eat() {
        return "Cat eat fish";
    }
    makeNoise() {
        return "meow";
    }
}


class Veterinarian {
    static treatAnimal(animalObject) {
        return ` Food : ${animalObject.food} Location : ${animalObject.location}`;
    }
}


let tuzik = new Dog('Meat', 'the outside');
console.log(Veterinarian.treatAnimal(tuzik));

let zoo = [new Cat('Salmon','House'),new Horse('Carrot','barn'),new Dog('booth','beef')];
zoo.forEach(element => {
    console.log(Veterinarian.treatAnimal(element));
})