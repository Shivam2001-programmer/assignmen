import './App.css';
import Blog from './components/Blog';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <main className='w-11/12 mx-auto'>
      <Home />
      <Card />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
