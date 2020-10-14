import { generateId } from '../Utils/GenerateId.js'

export default class Job {
  constructor({ type, qualifications, payrate, hours }) {
    this.type = type || "Web Developer"
    this.qualifications = qualifications || "Bachelors degree in science"
    this.payrate = payrate || 12
    this.hours = hours || 40
    this.id = generateId()
  }
  get Template() {
    return `<div class="col-3">
      <div class="card rounded shadow m-3 p-3 text-center">
    <h3>${this.type}</h3>
    <p>${this.qualifications}</p>
    <h6>$${this.payrate}/hr</h6>
    <h6>${this.hours}hrs/week</h6>
  <button class="btn btn-primary" onclick="app.jobsController.apply()">Apply Now</button>
  <button class="btn btn-danger mt-2" onclick="app.jobsController.delete('${this.id}')">Delete</button>
      </div>
    </div>`
  }
}
