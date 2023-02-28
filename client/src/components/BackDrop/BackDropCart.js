import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../store/Context';

export default function BackDropCart() {
  const { backDropHide } = useContext(CartContext);


  return (
    <div onClick={backDropHide} style={{width: "100%", height: '100%', background:"pink", position: 'fixed', zIndex: '2', background: 'rgba(0, 0, 0, 0.1)'}}></div>
  )
}
