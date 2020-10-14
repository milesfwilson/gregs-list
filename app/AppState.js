import Car from "./Models/Car.js"
import House from './Models/House.js'
import Job from './Models/Job.js'
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]}*/
  cars = [new Car({ make: "Honda", model: "Accord", year: 2002, price: 5000, img: "https://images.unsplash.com/photo-1578659258511-4a4e7dee7344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80", description: "This is a real smooth ride." })]

  /** @type {House[]}*/
  houses = [new House({ year: 1963, levels: 2, style: "Farmhouse", bathrooms: 3, img: "//placehold.it/200x200", price: 250000 })]

  /** @type {Job[]}*/
  jobs = [new Job({ type: "Web Developer", qualifications: "Bachelors Degree", payrate: 20, hours: 40 })]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
