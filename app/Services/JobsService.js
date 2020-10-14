import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js"

export default class JobsService {
  constructor() {
    console.log("hello from Jobs Service!")
  }

  createJob(rawJob) {
    let temp = ProxyState.jobs
    temp.push(new Job(rawJob))
    ProxyState.jobs = temp
  }

  removeJob(id) {
    let temp = ProxyState.jobs
    let index = temp.findIndex(j => j.id)
    temp.splice(index, 1)
    ProxyState.jobs = temp
    // @ts-ignore
    Swal.fire(
      'Deleted!',
      ' ',
      'error'
    )
  }

  apply() {
    // @ts-ignore
    Swal.fire(
      'You applied!!',
      'Go get \'em!',
      'success'
    )
  }
}

export const jobsService = new JobsService()