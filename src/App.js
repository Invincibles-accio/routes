

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import {Routes, Route} from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Error from "./Pages/Error";

import "./App.css"


const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<Error />} />

            </Routes>
            
        </div>
    );
}

export default App;