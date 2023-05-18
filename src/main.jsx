import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Router,
  Routes,
} from "react-router-dom";
import './index.css'

import Profile from './pages/user/Profile.jsx';
import Registration from './pages/user/Registration.jsx';
import Login from './pages/user/Login.jsx';
import Todo from './pages/Todo/Todo.jsx';
import { Provider } from 'react-redux';
import Store from '../StatesManagement/Store';
import LayoutScreen from './LayoutScreen.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
     <BrowserRouter>
        <Routes>
          <Route exact path="/todo" element={<LayoutScreen/>}/>
          <Route exact path="/user/profile" element={<Profile/>} />
          <Route exact path="/user/registration" element={<Registration/>} />
          <Route exact path="/user/login" element={<Login />} />
          <Route exact path="/todo" element={<Todo/>} />
          <Route path="*" element={<div>PAGE NOT FOUND</div>} />
        </Routes>
     </BrowserRouter>
     </Provider>
  </React.StrictMode>,
)
