import { ProxyState } from '../AppState.js'
import { jobsService } from '../Services/JobsService.js'


function _draw() {
  let jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById("jobs").innerHTML = template
}
export default class JobsController {

  constructor() {
    console.log("hello from Jobs Controller!")
    _draw()
    ProxyState.on("jobs", _draw)
  }

  editJob(e, id) {
    e.preventDefault()
    console.log("hello world!")
    let form = e.target
    let editedJob = {
      // @ts-ignore
      jobTitle: form.jobTitle.value,
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      rate: form.rate.value,
      // @ts-ignore
      hours: form.hours.value,
      // @ts-ignore
      description: form.description.value,
      _id: id
    }
    // @ts-ignore
    $('#editJob-' + id).modal('toggle')

    jobsService.editJob(editedJob)
  }

  delete(id) {
    jobsService.removeJob(id)
  }

  apply() {
    jobsService.apply()
  }
  createJob(event) {
    event.preventDefault();
    let form = event.target

    let newJob = {
      // @ts-ignore
      jobTitle: form.jobTitle.value,
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      rate: form.rate.value,
      // @ts-ignore
      hours: form.hours.value,
      // @ts-ignore
      description: form.description.value

    }
    form.reset()
    jobsService.createJob(newJob)
    // @ts-ignore
    Swal.fire(
      'Job added!',
      'Now go hire someone!',
      'success'
    )
  }

}