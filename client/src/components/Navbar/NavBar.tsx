/* import library */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* import components */
// import DrawerToggleButton from '../reuseComponents/SideDrawer/DrawerToggleButton';
import './navbar.css';
// import CartDrawerToggle from '../reuseComponents/cartDrawer/CartDrawerToggle';
import { useDispatch, useSelector } from 'react-redux';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { logout } from '../../store/redux/actions/userActions';
import { StateStore } from '../../App';

/* icon */


interface MyProps {
    drawerToggleClick: () => void;
}


export default function NavBar(props: MyProps) {
    const dispatch = useDispatch()
    const userLogin = useSelector((state: StateStore) => state.userLogin);
    const getuser = useSelector((state: StateStore) => state.userLogin.userInfo);
    const { userInfo } = userLogin;

    const [isAdmin, setIsAdmin] = useState(false);


    if (getuser) {
    //   setIsAdmin(getuser.isAdmin)
    }



    // console.log(isAdmin)
    const logAutPromise = logout();


    // Xử lý lohout
    const handleLogout = () => {
        // dispatch(logout())
        logAutPromise(dispatch);
    }
    // click Show profile
    const handleclickProfile = () => {

    }

    return (
        <>
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    {/* Open/Close Menu */}
                    <div className="faBar" >
                        <DrawerToggleButton drawerToggleClick={props.drawerToggleClick} />
                    </div>

                    {/* LOGO Nav */}
                    <div style={{ marginLeft: "15px" }}><Link className="toolbar__logo" to="/"><b>Logo</b></Link></div>

                    <div className="spacer"></div>

                    <div className="toolbar__navigation-items">
                        <ul>
                            <Link className="item__bar" to="/">
                                <li>Home</li>
                            </Link>

                            <Link className="item__bar" to="/shop">
                                <li>Shop</li>
                            </Link>

                            <Link className="item__bar" to="/blog">
                                <li>Blog</li>
                            </Link>

                            <Link className="item__bar" to="/news">
                                <li>News</li>
                            </Link>

                            <Link className="item__bar" to="/contacts">
                                <li>Contacts</li>
                            </Link>

                            {/* {
                                isAdmin ?
                                    <>
                                        <Link className="item__bar" to="/contacts">
                                            <li>Contacts</li>
                                        </Link>
                                    </> : null
                            } */}

                        </ul>

                    </div>
                    <div className="spacer"></div>

                    <div>
                        <ul>
                            <li style={{ marginTop: '12px', listStyle: 'none' }} className='item__bar__card' >
                                {/* cart */}
                                {/* <CartDrawerToggle /> */}
                                {/* {cartItems.length > 0 && <div className='item__count'>
                                                <span><b>{cartItems.length}</b></span>
                                            </div>} */}
                            </li>
                        </ul>
                    </div>

                    <div className="toolbar__navigation-user-store">
                        <ul>
                            {userInfo ? (
                                <>
                                    <Link style={{ textDecoration: 'none' }} to='/profile'>
                                        <li style={{ minWidth: '250px', textAlign: 'end', alignItems: 'center', height: '50px' }} className='profile item__bar' onClick={handleclickProfile}>
                                            <img style={{ marginRight: '7px' }} src='https://avatars.githubusercontent.com/u/70809618?s=400&u=4fa5bdd589e6f6bb0f6377be69ba8146f75d389b&v=4' alt='' className='avatar__user' />
                                            Hi, {userInfo.name}
                                        </li>
                                    </Link>

                                    <Link style={{ textDecoration: 'none' }} to=''>
                                        <li className='profile item__bar' onClick={handleLogout}>
                                            logout
                                        </li>
                                    </Link>
                                </>

                            ) : (
                                <>
                                    <Link style={{ width: '100px', textAlign: 'center', alignItems: 'center', height: '50px', display: 'flex' }} className="item__bar" to="/login"><p style={{ margin: 'auto' }}>Đăng Nhập</p></Link>
                                    <Link style={{ width: '80px', textAlign: 'center', alignItems: 'center', height: '50px', display: 'flex' }} className="item__bar" to="/register?redirect=/"><p style={{ margin: 'auto' }}>Đăng Ký</p></Link>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
