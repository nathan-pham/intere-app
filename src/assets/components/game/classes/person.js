import { width, height, settings } from "../config.js"
import { random, distance } from "../libs/utils.js"
import generate from "../libs/name.js"

const { colors, covid, speed } = settings

let _height = height - 50

class Person {
  x = random(10, width - 10)
  y = random(10, _height - 10)
  r = 10
  color = colors.healthy
  name = generate()

  vector = {
    x: random(-3, 3) / 3,
    y: random(-3, 3) / 3
  }

  constructor(infected) {
    if(infected) {
      this.color = colors.infected
      this.recovery()
    }
  }

  get infected() {
    return this.color === colors.infected
  }

  get recovered() {
    return this.color === colors.recovered
  }

  get deceased() {
    return this.color === colors.deceased
  }

  get healthy() {
    return !(this.deceased || this.recovered || this.infected)
  }

  recovery() {
    setTimeout(() => {
      this.color = colors.recovered
      if(Math.random() <= covid.dying) {
        this.color = colors.deceased
      }
    }, (random(10, 15) * 1000) - (speed / 2))
  }

  collision(people) {
    people.forEach(person => {
      if(person === this) {
        return
      }
      
      let d = distance(person.x, person.y ,this.x, this.y)
      if((d < person.r + this.r) && person.infected && this.healthy) {
        if(Math.random() <= covid.contact) {
          this.color = colors.infected
          this.recovery()
        }
      }
    })
  }

  boundary() {
    if(this.x >= width - this.r || this.x < this.r)	{
			this.vector.x *= -1
		}
		if(this.y >= _height - this.r || this.y < this.r) {
			this.vector.y *= -1		 
		}
  }

  update() {
    if(this.deceased) {
      return
    }

    this.x += this.vector.x
    this.y += this.vector.y

    this.boundary()
  }
  
  render(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

export default Person