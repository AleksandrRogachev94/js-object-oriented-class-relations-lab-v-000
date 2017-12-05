let store = {drivers:[], passengers:[], trip:[]}

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    driverId += 1
    this.id = driverId
    this.name = name
    store.drivers.push(this)
  }
}

class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter((trip)=> {
      return trip.passengerId == this.id
    })
  }
}

class Trip{
  constructor(name, passenger, driver){
    this.name = name
    this.passengerId = passenger.id;
    this.driverId = driver.id;
    this.id = ++tripId
    store.trips.push(this)
  }
  passenger(){
    return store.passengers.filter(passenger => {passenger.id === this.passengerId})
  }
  driver(){
    return store.drivers.filter(driver => {driver.id === this.driverId})
  }
}

d1 = {id: 1}, p1 = {id: 2}

t1 = new Trip("my trip", d1, p1) => t1.driverId === 1

t1.passenger() => p1
t1.driver() => d1
