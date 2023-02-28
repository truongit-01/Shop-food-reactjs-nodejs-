import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import { useSelector } from 'react-redux';
import DetailProduct from './page/DetailProduct';
import Footer from './components/Footer';
import NotFound from './page/NotFound';
import useEth from './store/context/EthContext/useEth';
import Testblockchain from './components/Testblockchain';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AuthContextProvider } from './store/context/AuthContext';
import Protected from './components/Protected';
import Profile from './page/Profile';
import Home from './page/Home';
import Shop from './page/Shop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDropNav from './components/BackDrop/BackDropNav';
import Login from './page/Login';
import Blog from './page/Blog';
import Register from './page/Register';
import Dashboard from './components/admin/Dashboard';
import ChefFamous from './page/ChefFamous';

export interface StateStore {
  userLogin: {
    loading: boolean;
    userInfo: {
      isAdmin: boolean;
      name?: string;
    };
    error: boolean;
  };
}

function App() {
  const [user, setUser] = useState(true);
  const getuser = useSelector((state: StateStore) => state.userLogin.userInfo);
  const { state } = useEth();

  useEffect(() => {
    if (getuser === null && getuser === undefined) {
      setUser(false);
    } else {
      setUser(true);
    }
  }, [getuser, user]);


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
    <AuthContextProvider>
      <div className="App">
        <Router>
          <NavBar drawerToggleClick={handleOpenDrawerToggleClick} />
          <>
            {sideDrawerOpen ? <SideDrawer /> : null}
            {sideDrawerOpen ? <BackDropNav HandleCloseDrawerToggleClick={handleCloseDrawerToggleClick} /> : null}
          </>


          <Routes>
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/detail' element={<DetailProduct />} />
            <Route path='/chef-famous' element={<ChefFamous />} />
            <Route path='/admin' element={<Dashboard />} />
            <Route
              path="/detail-product/:productId"
              element={user ? <DetailProduct /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/test-blockhain" element={<Testblockchain />} />
          </Routes>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
