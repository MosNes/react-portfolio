import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App bg-dark text-light">
      <Header/>
      <main className='container-fluid'>
        {/* <About /> */}
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
