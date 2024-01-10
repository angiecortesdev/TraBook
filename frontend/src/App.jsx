import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignIn from "./Pages/LoginSignIn";
import RegisterSignUp from "./Pages/RegisterSignUp";
import Home from "./Pages/Home";


function App(){
    return (
        <>
            <BrowserRouter>
                <NavBar />    
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginSignIn />} />  
                    <Route path="/register" element={<RegisterSignUp />} />  
                </Routes>    
            </BrowserRouter>
        </>
    );
}


export default App;