import './App.css';
import Intro from './Component/intro/intro';
import About from './Component/about/about';
import ProductsList from './Component/ProductList/ProductList';
import Contact from './Component/contact/contact'

function App() {
  return (
    <div className="App">
      
     <Intro />
     <About />
     <ProductsList />
     <Contact />
    </div>
  );
}

export default App;
