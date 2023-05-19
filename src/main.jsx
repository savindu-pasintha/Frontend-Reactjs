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

import Profile from './pages/user/Profile.jsx';
import Registration from './pages/user/Registration.jsx';
import Login from './pages/user/Login.jsx';
import Todo from './pages/Todo/Todo.jsx';
import { Provider } from 'react-redux';
import Store from '../StatesManagement/Store';
import LayoutScreen from './LayoutScreen.jsx';
import OAuthLogout from './component/0Auth/OAuthLogout.jsx';
import OAuth from './pages/OAuth/OAuth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
     <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LayoutScreen/>}>
              <Route exact path="/todo" element={<Todo/>}/>
              <Route exact path="/profile" element={<Profile/>} />
              <Route exact path="/registration" element={<Registration/>} />
              <Route exact path="/login" element={<OAuth />} />
              <Route exact path="/logout" element={<OAuth />} />
              <Route exact path="/todo" element={<Todo/>} />
              <Route path="*" element={<div>PAGE NOT FOUND</div>} />
          </Route>
        </Routes>
     </BrowserRouter>
     </Provider>
  </React.StrictMode>,
)
