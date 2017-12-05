let store = {drivers:[], passengers:[], trips:[]}

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
  trips(){
    return store.trips.filter(trip => this.id === trip.driverId)
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
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }
  driver(){
    return store.drivers.find(driver => driver.id === this.driverId)
  }
}
