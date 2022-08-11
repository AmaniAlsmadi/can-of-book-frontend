import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './component/profile';
import About from './About';
import Welcome from './welcome';
import TableOfBook from './component/myTable';

import { useAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UpdateBook from './component/updateBook';

export default function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Router>
        <Header />
        <Routes>
        
          <Route
            exact path="/"
            element={(isAuthenticated)?<BestBooks />:<Welcome/>}
          >
          </Route>
          <Route path="/" element={<App />} />
          <Route path="profile" element={<Profile />} />
          <Route path="MyTable" element={(isAuthenticated)?<TableOfBook />: 'Login please'} />
          <Route path="update" element={(isAuthenticated)?<UpdateBook />: 'Login please'} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>

 
      <Footer />
    </>
  )
}


