import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

function App() {
    return (
        <div className="App">
            <Router>
                <div className='tw-min-h-screen'>
                    <Header />
                        <div className="CxO5jUhf">
                            <Routes>
                                <Route path='/home' element={<Home />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/contact' element={<Contact />} />
                            </Routes>
                        </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
