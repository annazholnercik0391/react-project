import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';



const App = (props) => {
  return (
    < div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile'
            element={<Profile />} />
          <Route path='/dialogs'
            element={<DialogsContainer />} />

          {/*<Route path='/news' element={<News/>}/>*/}
          {/*<Route path='/music' element={<Music/>}/>*/}
          {/*<Route path='/settings' element={<Settings/>}/>*/}
        </Routes>
      </div>
    </div>
  );
}

export default App;