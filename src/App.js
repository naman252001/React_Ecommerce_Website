import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Clothe from './components/Clothe';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="about" element={<About/>} />
              <Route path="clothe" element={<Clothe/>} />
              <Route path="login" element={<Login/>} />
              <Route path="signup" element={<Signup/>} />
              
      </Routes>



      {/* <Home/> */}
      {/* <Clothe/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <Footer/>
    
    </>
  );
}

export default App;
