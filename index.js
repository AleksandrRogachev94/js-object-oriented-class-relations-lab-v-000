let store = {drivers:[], passengers:[], trip:[]}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
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
    this.passengerId = passengerId;
    this.driverId = driverId;
    this.id = ++tripId
    store.trips.push(this)
  }
  passenger(){
    return store.passengers.find((passenger) => {return passenger.id === this.passengerId })
  }
  driver(){
    return store.drivers.find((driver) => {return driver.id === this.driverId})
  }
}
