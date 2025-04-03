import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Chatbotfrontend from './components/Chatbotfrontend';
import Satellite1 from './components/Satellite1';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
 


  return (
    <>
      <Navbar />
      <Chatbotfrontend/>
      <Router basename="/"> 
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/satellite1" element={<Satellite1/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>

        </Routes>
      </Router> 
      <Chatbotfrontend/>
     


     
 
    </>
  )
}


export default App