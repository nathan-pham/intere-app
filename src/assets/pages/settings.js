import { Link } from "react-router-dom"

const Settings = () => {
    return (
        <div id="root-settings">
            <h1 className="primary-color title">Settings</h1>
            <section className="text">
            </section>
            <Link to="/">
                <button className="primary-background back-button">Back</button>
            </Link>
        </div>
    )
}

export default Settings