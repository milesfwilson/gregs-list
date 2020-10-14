import { generateId } from "../Utils/GenerateId.js"

export default class House {

  constructor({ year, levels, style, bathrooms, img, price }) {
    this.year = year
    this.levels = levels
    this.style = style
    this.bathrooms = bathrooms
    this.img = img || "//placehold.it/200x200"
    this.price = parseInt(price) || 250000
    this.id = generateId()
  }

  get Template() {
    return `<div class="col-4">
    <div class="card m-3 shadow">
    <img class="card-img-top img-fluid" src="${this.img}" alt="">
    <div class="card-body text-center">
        <h4 class="">${this.year} ${this.style}</h4>
        <p class="">${this.bathrooms} Bathrooms ${this.levels} Levels</p>
        <h6 class="">$${this.price}</h6>
        <form onsubmit="app.housesController.bid('${this.id}')">
        <div class="form-group p-1">
        <input type="number"
        class="form-control" name="bid" id="bid" aria-describedby="helpId" placeholder="Bid">
        </div>
        <button class="btn btn-success btn-block" type="submit">Bid</button>
        </form>
        <button class="btn btn-danger btn-block mt-2" onclick="app.housesController.delete('${this.id}')">Delete</button>
  
    </div>
    </div>
  </div>`
  }
}


