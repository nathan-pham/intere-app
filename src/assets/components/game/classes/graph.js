import { width, height, settings } from "../config.js"
import { scale } from "../libs/utils.js"

const { healthy, colors } = settings

class Graph {
  lines = []

  update(bar) {
    for(const [ key, value ] of Object.entries(bar)) {
      bar[key] = scale(value, 0, healthy, 0, 50)
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
      ctx.rect(x, height - 50, 1, line.healthy)
      ctx.fillStyle = colors.healthy
      ctx.fill()

      // infected
      ctx.beginPath()
      ctx.rect(x, height - 50, 1, line.infected)
      ctx.fillStyle = colors.infected
      ctx.fill()

      // recovered
      ctx.beginPath()
      ctx.rect(x, height - 50, 1, line.recovered)
      ctx.fillStyle = colors.recovered
      ctx.fill()
    }
  }
}

export default Graph