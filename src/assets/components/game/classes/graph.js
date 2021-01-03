import { width, height, settings, generateSettings } from "../config.js"
import { scale } from "../libs/utils.js"

let { healthy, colors } = settings

class Graph {
  lines = []

  reset() {
    healthy = (generateSettings()).healthy
  }

  update(bar) {
    this.reset()
    
    for(const [ key, value ] of Object.entries(bar)) {
      let scaled = scale(value, 0, healthy, 0, 50)

      if(scaled >= 50) {
        scaled = 50
      } 
      else if(scaled <= 0) {
        scaled = 0
      }

      bar[key] = scaled
    }

    this.lines.push(bar)

    if(this.lines.length > width) {
      this.lines.shift()
    }
  }

  render(ctx) {
    for(let x = 0; x < this.lines.length; x++) {
      const line = this.lines[x]
      
      // healthy
      ctx.beginPath()
      ctx.rect(x, height - 50, 1, 50)
      ctx.fillStyle = colors.healthy
      ctx.fill()

      // infected
      ctx.beginPath()
      ctx.rect(x, height - line.infected, 1, line.infected)
      ctx.fillStyle = colors.infected
      ctx.fill()

      // recovered
      ctx.beginPath()
      ctx.rect(x, height - 50, 1, line.recovered)
      ctx.fillStyle = colors.recovered
      ctx.fill()

      // deceased
      ctx.beginPath()
      ctx.rect(x, height - 50 + line.recovered, 1, line.deceased)
      ctx.fillStyle = colors.deceased
      ctx.fill()

    }
  }
}

export default Graph