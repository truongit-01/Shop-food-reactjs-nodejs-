/* import library */
import { FaBars } from "react-icons/fa";


/* import components */
import './sideDrawer.css';

export default function DrawerToggleButton(props) {

    return (
        <>
            <FaBars onClick={props.drawerToggleClick} className="icon-drawer" />
        </>
    );
}