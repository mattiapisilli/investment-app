import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <header className="header">
            <div className="logo">INVESTMENT APP</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/investments/list">List</Link>
                <Link to="/investments/create">Create</Link>
            </nav>
        </header>
    )
}

export default Nav