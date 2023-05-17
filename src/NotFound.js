import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Twilight Imperium 4</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/tiles">Tiles</Link>
                <Link to="/factions">Faction Selector</Link>
                <Link to="/builder" style={{
                    color: "white",
                    backgroundColor: "Green",
                    borderRadius: '8px'
                }}>Map Builder</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;