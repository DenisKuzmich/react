import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friends from './components/Navbar/Friends/friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <DialogsContainer  />} />

        <Route  path='/profile' render={ () => <Profile  />} />
        
        <Route  path='/friends' render={ () => <Friends />} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
