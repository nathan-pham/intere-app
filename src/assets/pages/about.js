import Back from "../components/back.js"

const About = () => {
    return (
        <div id="root-about">
            <Back />
            <h1 className="primary-color title">About</h1>
            <section className="text">
                <p>Intere is a virus simulation to help others understand how quickly a disease can spread.</p>
                <p>This model is extremely simple. As I continue to improve the app, I will be adding more factors such as social distancing and mask wearing.</p>
                <p>If you have a suggestion, feel free to reach out to nathanpham.me@gmail.com</p>
            </section>
        </div>
    )
}

export default About