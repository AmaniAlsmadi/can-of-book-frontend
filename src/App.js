import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './component/profile';
import About from './About';
//import Welcome from './Welcome';

//import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {

  //const { isAuthenticated } = useAuth0();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact path="/"
            element={<BestBooks />}
          >
          </Route>
          <Route path="/" element={<App />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>

 
      <Footer />
    </>
  )
}


