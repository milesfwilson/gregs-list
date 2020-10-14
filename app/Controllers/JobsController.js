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

  delete(id) {
    jobsService.removeJob(id)
  }

  apply() {
    jobsService.apply()
  }
  createJob() {
    event.preventDefault();
    let form = event.target

    let rawJob = {
      // @ts-ignore
      type: form.type.value,
      // @ts-ignore
      qualifications: form.qualifications.value,
      // @ts-ignore
      pay: form.pay.value,
      // @ts-ignore
      hours: form.hours.value,
    }

    jobsService.createJob(rawJob)
    // @ts-ignore
    Swal.fire(
      'Job added!',
      'Now go hire someone!',
      'success'
    )
  }

}