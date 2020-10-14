import { ProxyState } from "../AppState.js"
import {carsService} from "../Services/CarsService.js"

function _draw(){
  let cars = ProxyState.cars
  let template = ""
  cars.forEach(c=> template += c.Template)
  document.getElementById("cars").innerHTML = template
}

export default class CarsController{
  constructor(){
    console.log("cars controller")
    console.log(ProxyState.cars)
    _draw()
    ProxyState.on("cars", _draw)
  }

  createCar(){
    event.preventDefault();
    console.log("car creating")
    let form = event.target
    console.log(form)
    let rawCar = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.imgUrl.value
    }
    console.log(rawCar)
    carsService.createCar(rawCar)
  }

  delete(id){
    carsService.removeCar(id)
  }

  bid(id){
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    console.log(form.bid.value)
    // @ts-ignore
    let bid = form.bid.value
    carsService.bid(id, bid)
  }
}