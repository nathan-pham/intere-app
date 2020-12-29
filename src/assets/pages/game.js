import { useState } from "react"

import Person from "../components/game/classes/person.js"
import * as config from "../components/game/config.js"

import Canvas from "../components/canvas"

const Game = () => {
    const [ restart, setRestart ] = useState(false)

    const people = [ new Person(true) ]

    for(let i = 0; i < config.population; i++) {
        people.push(new Person())
    }

    const draw = (ctx) => {
        ctx.clearRect(0, 0, config.width, config.height)
        people.forEach(person => {
            person.collision(people)
            person.update()
            person.render(ctx)
        })
    }

    return (
        <div id="root-game">
            <Canvas draw={ draw } />
            {/* <div className="canvas-overlay">

            </div> */}
        </div>
    )
}

export default Game 