import React from 'react';
import Navigation from '../Navigation';

const Header = (props) => {

    return(
        <header>
            <Navigation color="secondary" dark="true" full="false" expand="md" container="fluid" />
        </header>
    )
}

export default Header;