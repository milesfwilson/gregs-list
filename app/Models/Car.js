
import { generateId } from "../Utils/GenerateId.js"
export default class Car {
  constructor(data) {
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description available"
    this._id = data._id
  }

  get Template() {
    return /*html*/`<div class="col-4">
    <div class="card m-3 shadow">
    <img class="card-img-top  img-fluid" src="${this.imgUrl}" alt="">
    <div class="card-body text-center">
        <h4 class="card-title">${this.year} ${this.make} ${this.model}</h4>
        <p>${this.description}</p>
        <h6 class="card-text">$${this.price}</h6>

        <button class="btn btn-primary btn-block mt-2" data-toggle="modal" data-target="#EditCarModal-${this._id}">Edit</button>


    </div>
    </div>
</div>

${this.Modal}
`
  }

  get Modal() {
    return /*html*/`


  <!-- Modal -->
  <div class="modal fade" id="EditCarModal-${this._id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit ${this.year} ${this.make} ${this.model}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form onsubmit="app.carsController.editCar(event, '${this._id}')" class="form">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <input type="text" class="form-control" name="make" id="make"
                                aria-describedby="helpId" value="${this.make}">
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-group">
                            <input type="text" class="form-control" name="model" id="model"
                                aria-describedby="helpId" value="${this.model}">
                        </div>
                    </div>

                    </div>

                    <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <input type="number" class="form-control" name="price" id="price"
                                aria-describedby="helpId" value="${this.price}">
                        </div>
                    </div>


                    <div class="col">

                        <div class="form-group">
                            <input type="number" class="form-control" name="year" id="year"
                                aria-describedby="helpId" value="${this.year}">
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col">
                    
                    <div class="form-group">
                    <input type="url" class="form-control" name="imgUrl" id="imgUrl"
                    aria-describedby="helpId" value="${this.imgUrl}">
                    </div>
                    </div>
                    <div class="col">
                    
                    <div class="form-group">
                    <input type="text" class="form-control" name="description" id="description"
                    aria-describedby="helpId" value="${this.description}">
                    </div>
                    </div>
                    </div>
                <div class="row">
                    <div class="col">
                    </div>
                    </div>
                    <div class="row">
                    <div class="col">
                    
                    
                    </div>
                    </div>
                    
                    <button class="btn btn-primary btn-block" type="submit">Post</button>
          <button class="btn btn-danger btn-block mt-2" data-dismiss="modal" onclick="app.carsController.delete('${this._id}')">Delete</button>
                    
                    </form>
                    </div>
                    <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>

  `
  }
}
