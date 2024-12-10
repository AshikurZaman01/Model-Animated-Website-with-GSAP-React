import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div>
            <Link to={'/'}>
                <h2 className="font-neuMontreal lowercase text-3xl text-amber-700">Puchi'o</h2>
            </Link>
        </div>
    )
}

export default Logo