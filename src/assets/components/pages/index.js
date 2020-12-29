import { Link } from "react-router-dom"

const Button = ({ type, icon, href, play }) => {
    return (
        <Link to={ href }>
            <button className={ `default-button ${type}-background ${ play ? "play" : "" }` }>
                <i className={ `fas fa-${icon}` }></i>
            </button>
        </Link>
    )
}

export { Button }