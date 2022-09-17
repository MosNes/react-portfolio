import React from 'react';
import Navigation from '../Navigation';

const Header = (props) => {

    return(
        <header>
            <Navigation color="secondary" dark={true} expand="md" container="fluid" />
            <div className="borderLine"></div>
        </header>
    )
}

export default Header;