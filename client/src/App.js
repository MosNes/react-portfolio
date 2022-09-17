import { } from 'reactstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About';

function App() {
  return (
    <div className="App bg-dark text-light">
      <Header/>
      <main className='container-fluid'>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
