import { ProxyState } from '../AppState.js'
import { housesService } from '../Services/HousesService.js'

function _draw() {
  let houses = ProxyState.houses
  let template = ""
  houses.forEach(h => template += h.Template)
  document.getElementById("houses").innerHTML = template
}

export default class HousesController {
  constructor() {
    console.log("Houses controller")
    _draw()
    ProxyState.on("houses", _draw)
  }

  bid(id) {
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    console.log(form.bid.value)
    // @ts-ignore
    let bid = parseInt(form.bid.value)
    housesService.bid(id, bid)
    // @ts-ignore
    Swal.fire(
      'Bid Placed!',
      'Keep a watchful eye!',
      'success'
    )
  }
  delete(id) {
    housesService.removeHouse(id)
  }

  createHouse() {
    event.preventDefault();
    console.log("creating house")
    let form = event.target
    console.log(form)
    let rawHouse = {
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      style: form.style.value,
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      img: form.img.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      price: form.price.value
    }
    console.log(rawHouse)
    housesService.createHouse(rawHouse)
    // @ts-ignore
    Swal.fire(
      'House added!',
      'Now get bidding!',
      'success'
    )
  }
}