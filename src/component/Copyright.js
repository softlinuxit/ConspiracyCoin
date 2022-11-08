import React from 'react';
import teligramIcon from '../assets/images/teligram.png'

const Copyrigth = () => {
    return (
        <div className='copyRightWrapper'>
            Copyright© {new Date().getFullYear()}-AllRights Reserved
            <a href='https://t.me/Conspiracy911' target='_blank'><img src={teligramIcon} className='footerTwitterIcon' /></a>
        </div>
    )
}
export default Copyrigth