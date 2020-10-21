import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from '../Services/AxiosService.js'

class CarsService {
  constructor() {
    this.getCars()
  }

  bid(id, bidAmount) {
    let temp = ProxyState.cars
    if (bidAmount > 0) {
      let car = temp.find(c => c._id == id)
      car.price += parseInt(bidAmount)
      ProxyState.cars = temp
    }
  }

  // NOTE link this with the cars API
  removeCar(id) {
    api.delete("/cars/" + id).then(res => {
      this.getCars()
    }).catch(err => console.error(err))

    // NOTE old method of deleting proxystate array
    // let temp = ProxyState.cars
    // let carIndex = temp.findIndex(c => c._id == id)
    // temp.splice(carIndex, 1)
    // ProxyState.cars = temp

    // @ts-ignore
    Swal.fire(
      'Deleted!',
      ' ',
      'error'
    )
  }


  editCar(editedCar) {
    api.put("/cars/" + editedCar._id, editedCar).then(res => {
      this.getCars()
    }).catch(err => console.error(err))
  }



  // NOTE this pulls from the cars API
  getCars() {
    api.get("/cars").then(res => {
      ProxyState.cars = res.data.data.map(c => new Car(c))
    }).catch(err => console.error(err))
  }


  postCar(rawCar) {
    // NOTE old method of posting cars. Now we can post to the API
    // let temp = ProxyState.cars
    // temp.push(new Car(rawCar))
    // ProxyState.cars = temp

    api.post("/cars", rawCar).then(res =>
      this.getCars()
    ).catch(err => console.error(err))
  }
}
export const carsService = new CarsService()

