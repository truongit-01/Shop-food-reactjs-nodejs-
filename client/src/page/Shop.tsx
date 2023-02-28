import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardProduct from '../components/CardProduct';
import Footer from '../components/Footer';
import './Page.css';


const image = [
    { urlVideo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { urlVideo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { urlVideo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { urlVideo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { urlVideo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { urlVideo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
]

export default function Shop() {
    const [cc, setCC] = useState(false);

    const handleClick = (e: any) => {
        console.log(e);
        setCC(true);
    };

    const handleClickRM = () => {
        setCC(false);
    }



    return (
        <>
            <div style={{ background: '', width: '90%', margin: 'auto', marginTop: '100px', marginBottom: '50px' }} className='wrap_shop'>
                <h1 onClick={handleClickRM}>Delivery menu</h1>

                <div onClick={handleClick} className={cc ? "ss" : "aa"}>cc</div>
                <p onClick={handleClick} className={cc ? "ss" : "aa"}>cc</p>
                <p onClick={handleClick} className={cc ? "ss" : "aa"}>cc</p>
                <p onClick={handleClick} className={cc ? "ss" : "aa"}>cc</p>
                <p onClick={handleClick} className={cc ? "ss" : "aa"}>cc</p>
                <p onClick={handleClick} className={cc ? "ss" : "aa"}>cc</p>

                <div className='wrapper_item'>
                    {
                        image.map((data) => (
                            <div className='items'>
                                <Link to="/detail">
                                    <CardProduct urlImage={data.urlVideo} />
                                </Link>

                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
