import { Button } from "../components/pages/index"

const Index = () => {
    return (
        <div id="root-index" className="flex direction-column justify-center align-center">
            <main>
                <img className="logo" src="/icons/apple-icon.png" alt="Intere logo"/>
                <h1 className="primary-color">INTERE</h1>
                <div className="flex justify-center align-center">
                    <Button icon="cog" type="secondary" href="settings" />
                    <Button icon="play" type="primary" href="game" play={ true }/>
                    <Button icon="question" type="secondary" href="about" />
                </div>
            </main>
        </div>
    )
}

export default Index