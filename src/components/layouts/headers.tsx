import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav >
            <div className="flex items-center justify-between">

                <div className="flex items-center ">
                    <img src="" alt="Chery" />
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;