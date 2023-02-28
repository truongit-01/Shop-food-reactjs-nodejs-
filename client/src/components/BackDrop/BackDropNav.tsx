import React from 'react';
import './backdrop.css';

interface MyProps {
  HandleCloseDrawerToggleClick: () => void
}
export default function BackDropNav(props: MyProps) {
  return (
    <div className='back__drop__nav' onClick={props.HandleCloseDrawerToggleClick} ></div>
  )
}
