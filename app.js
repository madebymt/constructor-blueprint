
//House
function House(){
    this.squarefeet = 700
    this.floor = 2
    this.room = 4

}

const house = new House
console.log(house)

//CoffeeMachine

function CoffeeMachine() {
    this.cupsOfCoffeeCanMake = 12
    this.expresso = false
    this.timer = true
    this.price = 120
}
const coffeeMachine = new CoffeeMachine
console.log(coffeeMachine)

// Car

function Car() {
    this.brand = "Hondai"
    this.color = "grey"
    this.price = 17000
    this.highSpeed = 100
}

const car = new Car
console.log(car)

//Skateboard

function Skateboard(){
    this.material = "wood"
    this.lenght = "10 inch"
    this.width = "5 inch"
}

const skateboard = new Skateboard
console.log(skateboard)

//Bicycle

function Bicycle() {
    this.brand = "Giant"
    this.wheel = 2
    this.speed = 20
    this.warranty = true
}

const bicycle = new Bicycle
console.log(bicycle)

//Swing Set

function SwingSet(){
    this.height = "5'7"
    this.swingAmount = 2
    this.price = 399
}

const swingSet = new SwingSet
console.log(swingSet)
