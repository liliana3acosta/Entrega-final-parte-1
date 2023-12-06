import './App.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ContenedorItem from './components/ContenedorItem/ContenedorItem';
import Login from './components/Login/Login';
import { Route, Router, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/items' element={<ContenedorItem/>}/>
      {/* <ContenedorItem/> */}

    </Routes>
      <Footer/>
    </>
  )
}

export default App
