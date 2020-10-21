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
    _draw()
    ProxyState.on("houses", _draw)
  }

  // bid(id) {
  //   event.preventDefault();
  //   let form = event.target
  //   // @ts-ignore
  //   console.log(form.bid.value)
  //   // @ts-ignore
  //   let bid = parseInt(form.bid.value)
  //   housesService.bid(id, bid)
  //   // @ts-ignore
  //   Swal.fire(
  //     'Bid Placed!',
  //     'Keep a watchful eye!',
  //     'success'
  //   )
  // }
  delete(id) {
    housesService.removeHouse(id)
  }


  editHouse(event, id) {
    event.preventDefault()
    let form = event.target
    let editedHouse = {
      year: form.year.value,
      bedrooms: form.bedrooms.value,
      imgUrl: form.imgUrl.value,
      bathrooms: form.bathrooms.value,
      description: form.description.value,
      price: form.price.value,
      levels: form.levels.value,
      _id: id
    }
    // @ts-ignore
    $('#editHouse-' + id).modal('toggle')
    housesService.editHouse(editedHouse)
  }

  postHouse(event) {
    event.preventDefault();
    let form = event.target

    let rawHouse = {
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      description: form.description.value
    }
    form.reset()
    housesService.postHouse(rawHouse)
    // @ts-ignore
    Swal.fire(
      'House added!',
      'Now get bidding!',
      'success'
    )
  }
}