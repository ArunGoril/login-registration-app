// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs"
import AboutUs from "./components/AboutUs"
import Products from "./components/Products"
import Users from "./components/Users"
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

function App() {
  const [loginUser, setLoginUser] = useState({})
  return (
    <div className="App">
        <BrowserRouter>
            {
              (loginUser && loginUser._id) && <Header loginUser={loginUser} setLoginUser={setLoginUser}/>
            }
            <Routes>
                <Route path="/" element={loginUser && loginUser._id ? <Home /> : <Login setLoginUser={setLoginUser}/>}></Route>
                <Route path="/home" element={loginUser && loginUser._id ? <Home /> : <Login setLoginUser={setLoginUser}/>}></Route>
                <Route path="/contact" element={loginUser && loginUser._id ? <ContactUs /> : <Login setLoginUser={setLoginUser}/>}></Route>
                <Route path="/about" element={loginUser && loginUser._id ? <AboutUs /> : <Login setLoginUser={setLoginUser}/>}></Route>
                <Route path="/products" element={loginUser && loginUser._id ? <Products /> : <Login setLoginUser={setLoginUser}/>}></Route>
                <Route path="/users" element={loginUser && loginUser._id ? <Users /> : <Login setLoginUser={setLoginUser}/>}></Route>
                <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
