import React from 'react';

const Footer = (props) => {

    return(
        <footer className="bg-secondary text-light">
            <div className="borderLine"></div>
            <div className='d-flex p-2 justify-content-center'>
                <a href="https://github.com/MosNes" target="blank" >
                    <img alt="Github Logo" className='footerImg' src={require('../../assets/images/Github-Logo-White.png')}></img>
                </a>
                <a href="https://www.linkedin.com/in/moses-nester-8515b565" target="blank" >
                    <img alt="LinkedIn Logo" className='footerImg' src={require('../../assets/images/linkedin-logo-white-1024x1024.png')}></img>
                </a>
                
            </div>
        </footer>
    )
}

export default Footer;