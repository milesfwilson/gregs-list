import { ProxyState } from "../AppState.js";
import House from "../Models/House.js"
import { api } from './AxiosService.js'
class HousesService {
  constructor() {

    this.getHouses()
  }
  getHouses() {
    api.get("/houses").then(res =>
      ProxyState.houses = res.data.data.map(h => new House(h))
    ).catch(err => console.error(err))
  }
  postHouse(rawHouse) {
    api.post("/houses", rawHouse).then(res =>
      this.getHouses()
    ).catch(err => console.error(err))
  }
  removeHouse(id) {
    api.delete("/houses/" + id).then(res =>
      this.getHouses()
    ).catch(err => console.error(err))
  }

  editHouse(editedHouse) {
    api.put("/houses/" + editedHouse._id, editedHouse).then(res =>
      this.getHouses()
    ).catch(err => console.error(err))
  }

}

export const housesService = new HousesService()
