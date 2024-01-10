import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import store from './utiles/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Head />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    </Provider> 
  );
}

export default App;
