import Car from "./Models/Car.js"
import House from './Models/House.js'
import Job from './Models/Job.js'
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]}*/
  cars = [new Car({ make: "Honda", model: "Accord", year: 2002, price: 5000, img: "https://images.unsplash.com/photo-1578659258511-4a4e7dee7344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80", description: "This is a real smooth ride." }), new Car({ make: "Saab", model: "900s", year: 1990, price: 2000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ69oqKzHg2UajxFKkURlyrWzd23Z3F6MkWtg&usqp=CAU", description: "The height of luxury." }), new Car({
    make: "Volvo", model: "240", year: 1985, price: 2000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkkxLQdhnAZ4J8HUFznr2aTk2FB1gZcTBRdQ&usqp=CAU", description: "Engineering you can trust."
  })]

  /** @type {House[]}*/
  houses = [new House({ year: 1963, levels: 2, style: "Farmhouse", bathrooms: 3, img: "https://americanfarmhousestyle.com/wp-content/uploads/2019/07/farmhouse-exterior-1.jpg", price: 250000 })]

  /** @type {Job[]}*/
  jobs = [new Job({ type: "Web Developer", qualifications: "Bachelors Degree", payrate: 20, hours: 40 }), new Job({ type: "Graphic Designer", qualifications: "Bachelors Degree", payrate: 25, hours: 30 }), new Job({ type: "Barista", qualifications: "Customer Service", payrate: 10, hours: 32 }), new Job({ type: "English Professor", qualifications: "Bachelors Degree", payrate: 22, hours: 30 })]

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
