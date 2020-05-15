// W5D2 Class work
//vehicle simulation 
//want a class to represent our vehicle
//vehicle should have some attributes
//one of them should be mpg attribute
//fuelLevel would be 0 when class is created

//we should be able to add gas to our car
//we should be able to drive for a certain amount of miles
//we should be able to query it for the range left

class Vehicle {
  constructor(color, engineType, mpg, gasTankCapacity) {
    this.color = color
    this.engineType = engineType
    this.mpg = mpg
    this.gasTankCapacity = gasTankCapacity
    this.fuelLevel = 0
    this.odometer = 0
  }

  //gallons: number of gallons to add to the tank
  fuelUp(gallons) {
    this.fuelLevel = this.fuelLevel + gallons

    //ensures no matter how much gas you add it can be more than the tank's capacity
    if(this.fuelLevel > this.gasTankCapacity) {
      this.fuelLevel = this.gasTankCapacity
    } else if(this.fuelLevel < 0) { // siphon off gas limit
      this.fuelLevel = 0
    }
  }

  // drive method - want to update fuelLevel based on the number of miles driven
    // records how far you drive in miles: 10
    //mpg is an attribute so we know that value
    // distance divided by mpg which we can then calculate how many gallons are removed from fuelLevel
  drive(miles) {
    let gallonsConsumed = miles/this.mpg
    let milesMax = this.gasTankCapacity * this.mpg

    this.fuelLevel = this.fuelLevel - gallonsConsumed
    if(this.fuelLevel < 0) { //can't drive more miles than available fuel
      this.fuelLevel = 0
    }

    if(miles > milesMax) {
      this.odometer = this.odometer + milesMax
    } else {
      this.odometer = this.odometer + miles
    }
  }
}


let jeep = new Vehicle('black', 'v8', 10, 20)
console.log(jeep)
jeep.fuelUp(25) //correctly only added 20gallons
jeep.drive(30) //drove 30miles
console.log(jeep)

// Bonus challenge: Odometer under the drive() method
  // counts the miles
  // factors that vehicle can only go as many miles as fuel level * mpg

jeep.fuelUp(5) //correctly only added 3 gallons
jeep.drive(10) //drove 10miles
console.log(jeep)

jeep.fuelUp(1) 
jeep.drive(205) 
console.log(jeep.odometer) //correctly shows 240 instead of 245 
console.log(jeep)




// NEW TRUCK Class
// my truck class
//should have a bedsize attribute
// all trucks are white
//it should override the drive method, such that if I am carrying cargo then my mpg is reduced by 15%

//*extends allows us to take all the attributes and methods from another class, such as Vehicle

//*super calls the parent constructor. EXPECTS the same amount of arguements taken from the Extended class

class Truck extends Vehicle {
  constructor(engineType, mpg, gasTankCapacity, bedsize) {
    super('white', engineType, mpg, gasTankCapacity);
    this.bedsize = bedsize
    this.hasCargo = false
  }
  loadUp(){
    this.hasCargo = true
  }
  unLoad(){
    this.hasCargo = false
  }
  drive(miles) {

    // records how far you drive in miles: 10
    //mpg is an attribute so we know that value
    // distance divided by mpg which we can then calculate how many gallons are removed from fuelLevel
    
    let gallonsConsumed;

    if (this.hasCargo) {
      gallonsConsumed = miles/(this.mpg * .85)
    } else {
      gallonsConsumed = miles/(this.mpg)
    }

    this.fuelLevel = this.fuelLevel - gallonsConsumed

    if(this.fuelLevel < 0) { //can't drive more miles than available fuel
      this.fuelLevel = 0
    } else {

    }
  }
}

let tacoma = new Truck(30, 'Electric', 25, 'long')
console.log(tacoma)
tacoma.fuelUp(20)
tacoma.loadUp() //this will make the statement true
tacoma.drive(4)
console.log(tacoma)

