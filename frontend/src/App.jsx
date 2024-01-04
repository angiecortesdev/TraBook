import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Destination from "./Pages/Destination";
import LoginSignIn from "./Pages/LoginSignIn";
import RegisterSignUp from "./Pages/RegisterSignUp";
import Tour from "./Pages/Tour";
import Home from "./Pages/Home";

// import LoginSignUp from "./Pages/LoginSignUp";


function App(){
    return (
        <div>
            <BrowserRouter>
            <NavBar />    
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/destinations" element={<Destination/>} />
                <Route path="/tours" element={<Tour/>} />
                <Route path="/login" element={<LoginSignIn />} />  
                <Route path="/register" element={<RegisterSignUp />} />  
            </Routes>    
            </BrowserRouter>
        </div>
    );
}


export default App;