let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
   
    store.drivers.push(this)
  }
  //  # keep in mind that all of this is stored in the store hash


  trips() {
    return  store.trips.filter(x => this.id == x.driverId)
    // # store  is an hash and trips is an key in that hash
    } 

    passengers() {
      return  store.trips.filter(x => this.id == x.driverId).map(x => x.passenger())
      }
} 

let passengerId = 0
  
    class Passenger {
      constructor(name,driver){
        this.id = ++passengerId
        this.name = name
        if(driver){
            this.setDriver(driver)
  //  setDriver is a function. and we dont need to delcare the function 
  //  infront of becasue we are in a class....
          }
          store.passengers.push(this)
 // # store.passengers is a returned array on it on
//  # keep in mind that all of this is stored in the store hash

      }
      setDriver(driver){
        this.driverId = driver.id
      }

      trips() {
        return  store.trips.filter(x => this.id == x.passengerId)
 // # store  is an hash and trips is an key in that hash
        } 
    
        drivers() {
          return  store.trips.filter(x => this.id == x.passengerId).map(x => x.driver())
          }
    } 

     let tripId = 0

class Trip{
  // # this is like my joint table
  constructor(driver, passenger){
    this.id =++tripId

    if(driver){
      this.driverId = driver.id  
    }
     
    if(passenger){
      this.passengerId = passenger.id

    }
    store.trips.push(this)
      }
         
      passenger() {
      return  store.passengers.find(x => this.passengerId == x.id)
      } 

      driver() {
        return  store.drivers.find(x => this.driverId == x.id)
        } 
   }




  
 