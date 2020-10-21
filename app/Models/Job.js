import { generateId } from '../Utils/GenerateId.js'

export default class Job {
  constructor(data) {
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.rate = data.rate
    this.hours = data.hours
    this.description = data.description
    this._id = data._id
  }
  get Template() {
    return `<div class="col-3">
      <div class="card rounded shadow m-3 p-3 text-center">
    <h3>${this.jobTitle}</h3>
    <p>${this.company}</p>
    <h6>$${this.rate}/hr</h6>
    <h6>${this.hours}hrs/week</h6>
    <p>${this.description}</p>
  <button class="btn btn-success" onclick="app.jobsController.apply()">Apply Now</button>
  <button type="button" class="btn btn-primary btn-block mt-2" data-toggle="modal" data-target="#editJob-${this._id}">
  Edit
</button>
    ${this.Modal}
    `
  }



  get Modal() {
    return /*html*/ `


<!-- Modal -->
<div class="modal fade" id="editJob-${this._id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit ${this.jobTitle} at ${this.company}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body">



      <div class="col-12" id="form">
      <form class="form" onsubmit="app.jobsController.editJob(event, '${this._id}')">
      <div class="row">

          <div class="col-6">


                  <div class="form-group p-1">
                      <input type="text" class="form-control" name="jobTitle" id="jobTitle"
                          aria-describedby="helpId" placeholder="Job Title" value="${this.jobTitle}">
                  </div>
          </div>
          <div class="col-6">

              <div class="form-group p-1">
                  <input type="text" class="form-control" name="company" id="company"
                      aria-describedby="helpId" placeholder="Company" value="${this.company}">
              </div>
          </div>
      </div>

      <div class="row">

          <div class="col-6">

              <div class="form-group p-1">
                  <input type="number" class="form-control" name="rate" id="rate"
                      aria-describedby="helpId" placeholder="Rate" value="${this.rate}">
              </div>
          </div>
          <div class="col-6">

              <div class="form-group p-1">
                  <input type="number" class="form-control" name="hours" id="hours"
                      aria-describedby="helpId" placeholder="Hours" value="${this.hours}">
              </div>
          </div>
      </div>
      <div class="row">
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

      <button class="btn btn-danger btn-block mt-2" onclick="app.jobsController.delete('${this._id}')">Delete</button>
              </div>
            </div>
              </form>
          </div>
      </div>
  </div>




      </div>
    </div>
  </div>
</div>


`
  }


}
