import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import {BrowserRouter, Route} from "react-router";
import {Routes} from "react-router/internal/react-server-client";
import AddProduct from "./components/AddProduct.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <main className="pt-20">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/add-product" element={<AddProduct/>}/>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>

    </>
  )
}

export default App
