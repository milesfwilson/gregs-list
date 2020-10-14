import { ProxyState } from "../AppState.js";
import House from "../Models/House.js"

class HousesService {
  constructor() {

    console.log("hello from HousesService!")
  }


  createHouse(rawHouse) {
    // let newCar = new Car(rawCar) 
    // console.log(newCar)  
    // let cars = [...ProxyState.cars, newCar ]
    // ProxyState.cars = cars

    // ProxyState.cars = ProxyState.cars.concat(new Car(rawCar))

    let temp = ProxyState.houses
    temp.push(new House(rawHouse))
    ProxyState.houses = temp
  }
  removeHouse(id) {
    let temp = ProxyState.houses
    let index = temp.findIndex(h => h.id == id)
    temp.splice(index, 1)
    ProxyState.houses = temp
    // @ts-ignore
    Swal.fire(
      'Deleted!',
      ' ',
      'error'
    )
  }

  bid(id, bidAmount) {
    let temp = ProxyState.houses
    if (bidAmount > 0) {
      let house = temp.find(h => h.id == id)
      house.price += parseInt(bidAmount)
      ProxyState.houses = temp
    }
  }

}

export const housesService = new HousesService()
