import { useState } from "react"
import { Link } from "react-router-dom"

import Person from "../components/game/classes/person.js"
import Graph from "../components/game/classes/graph.js"
import * as config from "../components/game/config.js"

import Canvas from "../components/canvas"
import Back from "../components/back.js"

const Game = () => {
    const [ modal, showModal ] = useState(false)

    const people = [ ]
    const graph = new Graph()

    let safe = modal ? "SHOW_MODAL" : 0

    let infectedGenesis = (config.settings.infected / 100) * config.settings.healthy

    for(let i = 0; i < infectedGenesis; i++) {
        people.push(new Person(true))
    }
    for(let i = infectedGenesis; i < config.settings.healthy; i++) {
        people.push(new Person())
    }
    
    const draw = (ctx) => {
        safe = 0

        let bar = {
            healthy: 0,
            recovered: 0,
            infected: 0,
            deceased: 0
        }
        
        ctx.clearRect(0, 0, config.width, config.height)
        people.forEach(person => {
            for(let i = 0; i < config.settings.speed; i++) {
                person.collision(people)
                person.update()
            }

            if((person.deceased && config.settings.dead) || !person.deceased) {
                person.render(ctx)
            }

            for(const [key, value] of Object.entries(bar)) {
                if(person[key]) {
                    bar[key] = value + 1
                }
            }

            if(person.infected) {
                safe ++    
            }
        })

        graph.update(bar)
        graph.render(ctx)

        if(safe === 0) {
            showModal(true)
        }
    }

    const restartSimulation = () => {
        showModal(false)
        safe = 0
    }

    return (
        <div id="root-game">
            {
                safe === "SHOW_MODAL" 
                    ? <></>
                    : (
                        <>
                            <Canvas draw={ draw } />
                            <Back />
                        </>
                    )
            }
           
            <div className="canvas-overlay flex align-center justify-center" style={ {
                display: modal ? "flex" : "none"
            } }>
                <Link to="/">
                   <button className="secondary-background default-button">
                        <i className="fas fa-chevron-left"></i>
                    </button> 
                </Link>
                <button className="primary-background default-button play" onClick={ restartSimulation }>
                    <i className="fas fa-redo-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default Game 