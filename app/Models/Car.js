import { generateId } from "../Utils/GenerateId.js"
export default class Car {
  constructor({ make, model, year, price, img, description }) {
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.img = img || "//placehold.it/200x200"
    this.description = description || "No description available"
    this.id = generateId()
  }

  get Template() {
    return `<div class="col-4">
    <div class="card m-3 shadow">
    <img class="card-img-top  img-fluid" src="${this.img}" alt="">
    <div class="card-body text-center">
        <h4 class="card-title">${this.year} ${this.make} ${this.model}</h4>
        <p>${this.description}</p>
        <h6 class="card-text">$${this.price}</h6>
        <form onsubmit="app.carsController.bid('${this.id}')">
        <div class="form-group p-1">
        <input type="number"
        class="form-control" name="bid" id="bid" aria-describedby="helpId" placeholder="Bid">
        </div>
        <button class="btn btn-success btn-block" type="submit" >Bid</button>
        </form>
        <button class="btn btn-danger btn-block mt-2" onclick="app.carsController.delete('${this.id}')">Delete</button>

    </div>
    </div>
</div>`
  }

}