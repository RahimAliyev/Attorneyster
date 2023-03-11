import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import Main from './components/Main';


import { useEffect } from 'react';
import AOS from 'aos';

import AnaSəhifə from './pages/AnaSəhifə';
import Əlaqə from './pages/Əlaqə';
import Haqqımızda from './pages/Haqqımızda';
import Səhifələr from './pages/Səhifələr';
import NotFoundPage from './pages/NotFoundPage';

import Footer from './components/Footer';
// import SwiperFields from './components/SwiperFields';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Result from './components/Results';
// marsrut sistemi starting

import Header from './components/Header';
// marsrut sistemi end
function App() {

  useEffect(() => {
    AOS.init();
  },  []);

  return (
    <>
    <div className='Wrapper'>
   <BrowserRouter>
   <Header/>
   <Routes>
   
    <Route path='/' element={<AnaSəhifə/>} />
    <Route path='/Əlaqə' element={<Əlaqə/>} />
    <Route path='/Haqqımızda' element={<Haqqımızda/>} /> 
    <Route path='/Səhifələr' element={<Səhifələr/>} /> 
    <Route path='*' element={<NotFoundPage/>} /> 
   </Routes>

   
    <Footer/>
   </BrowserRouter>
    
    
    {/* < Peterparker/>
    <PracticeAreas/>
   <Fields/>
    <Results/> */}
    
    </div>
    </>
   
  );
}

export default App;
