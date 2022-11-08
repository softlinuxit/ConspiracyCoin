import React from 'react'
import emailIcon from '../assets/images/email.png'
import locationIcon from '../assets/images/location.png'
import callIcon from '../assets/images/call.png'
import teligramIcon from '../assets/images/teligram.png'
import gmailIcon from '../assets/images/gmail.png'

const Footer = () => {
    return (
        <div className='footerWrapper'>
            <div className='footerFirstColumn' />
            <div className='footerSecondColumn'>
                <div className='footerTtile'>
                    About Us
                </div >
                <div className='footerAboutUs'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
            </div>
            <div className='footerThirdColumn'>
                <div className='footerTtile'>
                    Contact Us
                </div >
                <div className='footerContactUs'>
                    <img src={emailIcon} className='footerTextIcon' />
                    <div className='footerContactUsText'>info@example.com</div>
                </div>
                <div className='footerContactUs'>
                    <img src={locationIcon} className='footerTextIcon2' />
                    <div className='footerContactUsText'>1(235)546-8797</div>
                </div>
                <div className='footerContactUs'>
                    <img src={callIcon} className='footerTextIcon3' />
                    <div className='footerContactUsText'>#123 dummy address</div>
                </div>
            </div>
            <div className='footerFourthColumn'>
                <div className='footerTtile'>
                    For More
                </div >
                <div className='footerForMore'>
                    <a href='https://t.me/Conspiracy911' target='_blank'><img src={teligramIcon} className='footerTwitterIcon' /></a>
                    <img src={gmailIcon} className='footerGmailIcon' />
                </div>
            </div>
        </div>
    )
}
export default Footer