import  { useState } from "react"

import Back from "../components/back.js"
import { settings, defaultSettings } from "../components/game/config.js"

let cache = settings

const Input = (props) => {
    const [ save, setSave ] = useState(cache[props.name])

    const { displayName, ...rest } = props

    const saveSettings = (key, value) => {
        setSave(value)
        cache[key] = value
        localStorage.setItem("settings", JSON.stringify(cache))
    }

    return (
        props.type === "checkbox"
            ? (
                <div className="input-wrapper flex justify-between">
                    <input checked={ save } {...rest} onChange={ (e) => saveSettings(props.name, e.target.checked) } />
                    <label htmlFor={ props.name }>{ displayName }</label>
                </div>
            )
            : (
                <div className="input-wrapper flex justify-between">
                    <input value={ save }  { ...rest } onChange={ (e) => saveSettings(props.name, e.target.value) } />
                    <label htmlFor={ props.name }>{ 
                        displayName || 
                        (props.name.charAt(0).toUpperCase() + props.name.substring(1))
                    }</label>
                </div>
            )
    )
}

const Settings = () => {
    const restoreDefault = () => {
        cache = defaultSettings
        localStorage.setItem("settings", JSON.stringify(cache))
        window.location.reload()
    }

    return (
        <div id="root-settings">
            <Back />
            <h1 className="primary-color title">Settings</h1>
            <section className="text">
                <p>Manage general game settings and privacy.</p>
            </section>
            <h2 className="primary-color title">Game</h2>
            <section className="text">
                <Input name="healthy" type="range" min="25" max="500" />
                <Input name="infected" displayName="Infected (%)" type="range" min="1" max="100" />
                <Input name="speed" type="range" min="1" max="10" />
                <Input name="dead" displayName="Show Dead" type="checkbox" />
            </section>
            <button className="primary-background restore" onClick={ restoreDefault }>Restore Default Settings</button>
            <h2 className="primary-color title">Privacy</h2>
            <section className="text">
                <p>This is an offline app; data is never shared with a server or another provider. Settings persist in your local storage and will disappear if you delete this app.</p>
            </section>
        </div>
    )
}

export default Settings