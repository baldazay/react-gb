import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link className="navbar__page" to='/'>homepage</Link>
            <Link className="navbar__page" to='/Chats'>chats</Link>
            <Link className="navbar__page" to='/Profile'>profile</Link>
        </nav>
    )
}