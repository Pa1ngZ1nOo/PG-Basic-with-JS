//What is oop and class basic concept ------------------------------------------------------------------------------------------------------
// class Car{
//     wheels = 4
//     color = "black"

//     drive(){
//         console.log('car is driving')
//     }
// }

// // console.log(new Car)

// let car = new Car
// console.log(car.wheels)

// let carTwo = new Car
// carTwo.wheels = "red"
// console.log(carTwo.wheels)

//oop example and static property --------------------------------------------------------------------------------------------------------
//oop Example 
class Calculator{
    PI = 3.14    
    Name = 'casio'

    area(r){
        return this.PI * r**2
    }

    volume(r,h){
        return this.area(r)*h
    }

    plus(n1, n2){
        return n1 + n2;
    }

    minus(n1, n2){
        return n1 - n2;
    }

    multiply(n1, n2){
        return n1 * n2;
    }

    division(n1, n2){
        return n1/n2;
    }

    remainder(n1, n2){
        return n1%n2;
    }

    static info(){
        let calulator = new Calculator
        console.log('I am ' + calculator.Name + ' calculator')
    }
}

// console.log(new Calculator)
let calculator = new Calculator
console.log(calculator.plus(1,2)) //1 + 2

console.log(calculator.remainder(3,2)) //  1
console.log(calculator.PI)//static var
console.log(Math.PI) //js class

//static method and this keyboard in classes -----------------------------------------------------------------------------------------
console.log("Area is " + calculator.area(2)) //static method
console.log(calculator.volume(2,4))

//static method main concept -------------------------------------------------------------------------------------------------------
//can't use this in static method
Calculator.info() //I am casio calculator

//constructor --------------------------------------------------------------------------------------------------------------------------
//OOp (constructor & access modifier)
class Car{
    Name = ''
    wheels = ''

    constructor(name, wheels){
        this.Name = name;
        this.wheels = wheels;
        this.drive()
    }

    drive(){
        console.log(this.Name + ' is driving')
    }

    getWheel(){
        console.log(this.Name + (this.wheels > 1 ? ' have ' : ' has ') + this.wheels + ' wheels')
    }
}

let toyota = new Car('toyota',4)
toyota.getWheel()

//access modifier --------------------------------------------------------------------------------------------------------
//OOP (access modifier)
class Car1{
    Name = "marcedes" //can change from outside - public default
    #hp = 300 //private property

    getHorsePower(){
        console.log('Horse Power is ' + this.#hp)
    }
}

let car1 = new Car1
//car1.#hp = 600; //error (Encapsulation)
car1.Name = "Toyota"
car1.getHorsePower();

//inheritance and protected concepts --------------------------------------------------------------------------------------
//OOP (inheritance)
class Animal{
    constructor(name){
        this.Name = name; //Name property will create cause this.Name
    }

    run(){
        console.log(`${this.Name} is running`)
    }
}

// let dog = new Animal('dog')
// console.log(dog)
// dog.run()

class Dog extends Animal{
    bark(){
        console.log(this.Name + ' woof woof')
    }
}

let dog = new Dog('Aung Nak')
dog.run()
dog.bark()