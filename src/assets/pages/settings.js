import { Link } from "react-router-dom"

const Settings = () => {
    return (
        <div id="root-settings">
            <Link to="/">
                <button className="primary-background back-button">
                    <i className="fas fa-arrow-left"></i>
                </button>
            </Link>
            <h1 className="primary-color title">Settings</h1>
            <section className="text">
                <p>Alter how the virus functions, how the simulation appears, etc.</p>
            </section>
            <h2 className="primary-color title">Game</h2>
            <section className="text">

            </section>
            <h2 className="primary-color title">Privacy</h2>
            <section className="text">
                <p>This is an offline app; data is never shared with a server or another provider. Settings persist in your local storage and will disappear if you delete this app.</p>
            </section>
        </div>
    )
}

export default Settings