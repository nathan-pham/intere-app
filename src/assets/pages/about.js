import { Link } from "react-router-dom"

const About = () => {
    return (
        <div id="root-about">
            <h1 className="primary-color title">About</h1>
            <section className="text">
                <p>Straze is a simple COVID-19 simulation to help others understand how quickly a virus can spread.</p>
                <p>While it is impossible to replicate the real world, this simulation does use accurate data provided by the CDC to determine the likelyhood of contraction on contact.</p>
                <p>This model is extremely simple. As I continue to improve the app, I will be adding more factors such as social distancing and mask wearing.</p>
                <p>If you have a suggestion, feel free to reach out to nathanpham.me@gmail.com</p>
            </section>
            <Link to="/">
                <button className="primary-background back-button">Back</button>
            </Link>
        </div>
    )
}

export default About