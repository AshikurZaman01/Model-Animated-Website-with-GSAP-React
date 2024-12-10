import Logo from "./Logo"
import Nav from "./Nav"

const Navbar = () => {
    return (
        <div className="w-full px-20 py-8  fixed z-[999]">


            <div className="flex justify-between items-center">
                {/* logo */}
                <Logo></Logo>
                {/* logo */}

                {/* nav */}
                <Nav></Nav>
                {/* nav */}
            </div>


        </div>
    )
}

export default Navbar