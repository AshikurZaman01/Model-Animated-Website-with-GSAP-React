import { Link } from "react-router-dom"

const Nav = () => {

    const routes = [
        { id: 1, name: "Services", path: "services" },
        { id: 2, name: "Our Work", path: "ourWork" },
        { id: 3, name: "About Us", path: "aboutUs" },
        { id: 4, name: "Insights", path: "insights" },
        { id: 5, name: "Contact", path: "contact" }
    ]

    return (
        <div>
            {
                routes.map((item, index) => (
                    <Link key={index} to={`/${item.path}`} className={`ml-0 mx-10 capitalize font-light text-lg ${index === 4 && "ml-32"}`}>
                        {item.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default Nav