import { Link } from "react-router-dom"
const About = () => {
    return (
        <div id="root-about">
            <Link to="/">
                <button className="primary-background back-button">Back</button>
            </Link>
            <h1 className="primary-color title">About</h1>
            <section className="text">
                <p>Straze is a simple COVID-19 simulation to help others understand how quickly a virus can spread.</p>
                <p>This application was built with React, a popular framework for web development.</p>
            </section>
        </div>
    )
}

export default About