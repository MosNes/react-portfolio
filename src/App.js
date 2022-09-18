import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {

  //-------------HOOKS AND STATE VARIABLES-------------------------------

  //default to first page in pages array
  const [currentPage, setCurrentPage] = useState('About');

  //-------------COMPONENT-----------------------------------------------

  return (
    <div className="App bg-dark text-light">
      {/* pass currentPage and setCurrentPage as props to the Header, since Nav is nested in Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main className='container-fluid'>

        {/* Render component based on value of currentPage, if error, default to About page */}
        {currentPage === 'About' ? <About /> : 
        currentPage === 'Portfolio' ? <Portfolio/> : 
        currentPage === 'Contact' ? <Contact /> : 
        currentPage === 'Resume' ? <Resume /> :
        <About />}
       
      </main>
      <Footer />
    </div>
  );
}

export default App;
