import { Link } from "react-router-dom"

const About = () => {
    return (
        <div id="root-about">
            <Link to="/">
                <button className="primary-background back-button">
                    <i className="fas fa-arrow-left"></i>
                </button>
            </Link>
            <h1 className="primary-color title">About</h1>
            <section className="text">
                <p>Straze is a simple COVID-19 simulation to help others understand how quickly a virus can spread.</p>
                <p>While it is impossible to replicate the real world, this simulation does use accurate data provided by the CDC to determine the likelyhood of contraction on contact.</p>
                <p>This model is extremely simple. As I continue to improve the app, I will be adding more factors such as social distancing and mask wearing.</p>
                <p>If you have a suggestion, feel free to reach out to nathanpham.me@gmail.com</p>
            </section>
            <h2 className="primary-color title">Recommendations</h2>
            <section className="text">
                <p>It's important we all follow official guidelines at the federal and local levels to help reduce the chances of spreading COVID-19.</p>
                <ul>
                    <li>Wash your hands frequently</li>
                    <li>Stay at least 6ft away from others</li>
                    <li>Cover your nose and mouth with a mask</li>
                    <li>Monitor your health by watching out for symptoms</li>
                </ul>
                <p>If you'd like to find out more, refer to the official <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank" rel="noreferrer">CDC</a> guidelines for more details.</p>
            </section>
            <h2 className="primary-color title">Symptoms</h2>
            <section className="text">
                <p>Anyone can experience symptoms for COVID-19. Symptoms appear within 2 - 14 days of contracting the virus. Be cautious about fever, chills, loss of taste/smell, body aches, etc.</p>
            </section>
        </div>
    )
}

export default About