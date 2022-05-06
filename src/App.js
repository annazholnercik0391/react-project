import React from 'react';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';




const App = (props) => {
  return (
    < div className='app-wrapper'>
      <HeaderContainer />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />
        <Route path='/dialogs/'
          render={() => <DialogsContainer />} />
        <Route path='/users/'
          render={() => <UsersContainer />} />
        <Route path='/login/'
          render={() => <LoginPage />} />
        {/*<Route path='/news' element={<News/>}/>*/}
        {/*<Route path='/music' element={<Music/>}/>*/}
        {/*<Route path='/settings' element={<Settings/>}/>*/}
      </div>
    </div>
  );
}
export default App;