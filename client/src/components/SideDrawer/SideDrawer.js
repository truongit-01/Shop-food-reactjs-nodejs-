import './sideDrawer.css';
import { Link } from 'react-router-dom';

export default function SideDrawer() {
    return (
        <>
            <nav className="side-drawer">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/shop">Shop</Link></li>
                    <li> <Link to="/blog">Blog</Link></li>
                    <li> <Link to="/news">News</Link></li>
                    <li> <Link to="/contacts">Contact</Link></li>
                    <li> <Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </>
    );
}