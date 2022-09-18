import React from 'react';
import Navigation from '../Navigation';

const Header = (props) => {

    const { currentPage, setCurrentPage }  = props;

    return(
        <header>
            {/* pass currentPage and setCurrentPage as props to Navigation component */}
            <Navigation color="secondary" dark={true} expand="md" container="fluid" currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <div className="borderLine"></div>
        </header>
    )
}

export default Header;