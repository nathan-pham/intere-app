import { Button } from "../components/pages/index"

const Index = () => {
    return (
        <div id="root-index" className="flex direction-column justify-center align-center">
            <main>
                <i className="fas fa-virus logo"></i>
                <h1 className="primary-color">COVID-19 Simulation</h1>
                <div className="flex justify-center align-center">
                    <Button icon="cog" type="secondary" href="settings" />
                    <Button icon="play" type="primary" href="game" play={ true }/>
                    <Button icon="question" type="secondary" href="questions" />
                </div>
            </main>
        </div>
    )
}

export default Index