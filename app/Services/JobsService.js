import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js"
import { api } from "./AxiosService.js";

export default class JobsService {
  constructor() {
    this.getJobs()
  }

  editJob(editedJob) {
    api.put("/jobs/" + editedJob._id, editedJob).then(res =>
      this.getJobs()
    ).catch(err => console.error(err))
  }
  getJobs() {
    api.get("/jobs").then(res =>
      ProxyState.jobs = res.data.data.map(j => new Job(j))
    ).catch(err => console.error(err))
  }
  createJob(rawJob) {
    api.post("/jobs", rawJob).then(res =>
      this.getJobs()
    ).catch(err => console.error(err))
  }

  removeJob(id) {
    api.delete("/jobs/" + id).then(res =>
      this.getJobs()
    ).catch(err => console.error(err))


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