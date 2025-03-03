import './App.css'
import MainPage from './components/MainPage';
import MenuHead from './components/MenuHead';
import ProfileCard from './components/ProfileCard';
import { useState } from 'react';



function App() {
  
  return (
    <div className='App'>
        <div className='header'> 
          <ProfileCard/>
          <div><MenuHead/></div>
        </div>
        <MainPage/>


    </div>
  )
}

export default App;
