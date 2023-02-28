import React from 'react';
import '../../reuseComponents/reuseComponents.css'
import BackDropCart from '../BackDrop/BackDropCart';
import { Link } from 'react-router-dom'

//
import { useContext } from 'react';
import { CartContext } from '../../../store/Context';


export default function CartDrawer() {
    const { showCart, cartItems } = useContext(CartContext);
    return (
        <>
            {showCart && (
                <div className='CartDrawer'>
                    <div style={{ margin: '3px' }}>
                        {cartItems.length === 0 ? (<h4>Chưa có mặt hàng nào</h4>) : (
                            <>
                                {cartItems.map((item, index) => (
                                    <div key={index} className='row cart__item'>
                                        <img className='col-md-4' style={{ height: "90%" }} src='https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2021/07/6-Cach-chup-hinh-quan-ao-dep-an-tuong.jpg' />
                                        <p className='col-md-6' id={item.id}>{item.nameCard}</p>
                                        <p className='col-md-2'>
                                            <button className='btn-delete-item'><p style={{ color: '5px' }}>Remove</p></button>
                                        </p>

                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    <div style={{ height: '30px' }}>
                        {/* <div className='btn-seeMore-cart'><a href='/product-cart'>See more</a></div> */}
                        <Link className="btn-seeMore-cart" to="/product-cart">See more</Link>
                    </div>

                </div>
            )}

            {showCart && (<BackDropCart />)}

        </>

    )
}
