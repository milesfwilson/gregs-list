import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

function _draw() {
  let cars = ProxyState.cars
  let template = ""
  cars.forEach(c => template += c.Template)
  document.getElementById("cars").innerHTML = template
}

export default class CarsController {
  constructor() {
    console.log("cars controller")
    console.log(ProxyState.cars)
    _draw()
    ProxyState.on("cars", _draw)

  }

  createCar(event) {
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
      imgUrl: form.imgUrl.value
    }

    form.reset()
    console.log(rawCar)
    // @ts-ignore
    Swal.fire(
      'Car added!',
      'Now get bidding!',
      'success'
    )
    carsService.postCar(rawCar)
  }

  delete(id) {
    carsService.removeCar(id)
  }
  editCar(e, id) {
    e.preventDefault()
    let form = e.target
    let editedCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      _id: id
    }
    // @ts-ignore
    $('#EditCarModal-' + id).modal('toggle')
    carsService.editCar(editedCar)
  }

  bid(id) {
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    console.log(form.bid.value)
    // @ts-ignore
    let bid = form.bid.value
    carsService.bid(id, bid)
    // @ts-ignore
    Swal.fire(
      'Bid placed!',
      'Now get bidding!',
      'success'
    )
  }
}