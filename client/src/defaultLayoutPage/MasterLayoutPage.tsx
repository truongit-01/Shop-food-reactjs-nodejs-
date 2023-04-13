import { useState } from 'react';
import BackDropNav from '../components/BackDrop/BackDropNav';
import NavBar from '../components/Navbar/NavBar'
import SideDrawer from '../components/SideDrawer/SideDrawer';
import "./defaultLayout.css"

export default function MasterLayoutPage({ children }: any) {
    /* xử lý đóng mở thanh menu nav */
    const [sideDrawerOpen, setSideDrawerOpen] = useState<{}>(false);

    interface Prev {
        sideDrawerOpen: boolean
    }

    const handleOpenDrawerToggleClick = () => {
        console.log(sideDrawerOpen)
        setSideDrawerOpen((prevState: Prev) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    }

    const handleCloseDrawerToggleClick = () => {
        return setSideDrawerOpen(false)
    }
    return (
        <>
            <NavBar drawerToggleClick={handleOpenDrawerToggleClick} />
            <>
                {sideDrawerOpen ? <SideDrawer /> : null}
                {sideDrawerOpen ? <BackDropNav HandleCloseDrawerToggleClick={handleCloseDrawerToggleClick} /> : null}
            </>
            {children}
        </>
    )
}
