import { Link } from "react-router-dom";

function Navbar (){
    return(
    <nav className="bg-gray-800 p-4">
            <Link to = "/">
               mm
            </Link>
            <Link to = "/Sell">
                Sell
            </Link>
    </nav>
    )
}

export default Navbar;