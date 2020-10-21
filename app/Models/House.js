import { generateId } from "../Utils/GenerateId.js"

export default class House {

  constructor(data) {
    this.year = data.year
    this.levels = data.levels
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.bedrooms = data.bedrooms
    this.description = data.description
    this._id = data._id
  }

  get Template() {
    return /*html*/`<div class="col-4">
    <div class="card m-3 shadow">
    <img class="card-img-top img-fluid" src="${this.imgUrl}" alt="">
    <div class="card-body text-center">
        <h4 class="">${this.year}</h4>
        <h6 class="">$${this.price}</h6>
        <p class="">${this.description}</p>
        <p class="text-left">${this.bathrooms} Bathrooms</p>
        <p class="text-left">${this.levels} Levels </p>
        <p class="text-left">${this.bedrooms} Bedrooms</p>
        <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#editHouse-${this._id}">
        Edit
      </button>
    </div>
    </div>
  </div>
  
  ${this.Modal}
  `
  }

  get Modal() {
    return /*html*/`
    <div class="modal fade" id="editHouse-${this._id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
  
          <div class="p-2" id="form">
            <form onsubmit="app.housesController.editHouse(event, '${this._id}')" class="form">
              <div class="row">
  
                <div class="col-4">
  
                  <div class="form-group p-1">
                    <input type="number" class="form-control" name="year" id="year"
                      aria-describedby="helpId" placeholder="Year" value="${this.year}">
                  </div>
                  </div>
  
                  <div class="col-4">
  
                    <div class="form-group p-1">
                      <input type="number" class="form-control" name="bedrooms" id="bedrooms"
                        aria-describedby="helpId" placeholder="Bedrooms" value="${this.bedrooms}">
                  </div>
                    </div>
  
                    <div class="col-4">
  
                      <div class="form-group p-1">
                        <input type="number" class="form-control" name="levels" id="levels"
                          aria-describedby="helpId" placeholder="Levels" value="${this.levels}">
                  </div>
                      </div>
                    </div>
  
  
                    <div class="row">
                      <div class="col-4">
  
  
                        <div class="form-group p-1">
                          <input type="url" class="form-control" name="imgUrl" id="imgUrl"
                            aria-describedby="helpId" placeholder="Image URL" value="${this.imgUrl}">
                  </div>
                        </div>
                        <div class="col-4">
  
                          <div class="form-group p-1">
                            <input type="number" class="form-control" name="bathrooms" id="bathrooms"
                              aria-describedby="helpId" placeholder="Bathrooms" value="${this.bathrooms}">
                  </div>
                          </div>
                          <div class="col-4">
  
                            <div class="form-group p-1">
                              <input type="number" class="form-control" name="price" id="price"
                                aria-describedby="helpId" placeholder="Price" value="${this.price}">
                  </div>
                            </div>
                            <div class="col-12">
  
                              <div class="form-group p-1">
                                <input type="text" class="form-control" name="description" id="description"
                                  aria-describedby="helpId" placeholder="Description" value="${this.description}">
                  </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12">
  
                                <button class="btn btn-primary btn-block" type="submit">Save</button>
                                <button class="btn btn-danger btn-block mt-2" onclick="app.housesController.delete('${this._id}')">Delete</button>
                                </div>
                            </div>
      </form>
                        </div>
  
  
                      </div>
                    </div>
                  </div>
                </div>
`
  }


}












