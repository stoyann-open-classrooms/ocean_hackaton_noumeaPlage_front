import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import "./index.css";
import Home from "./pages/Home";
// === Layout components

// === Pages

function App() {
  return (
    <>
      <Router>
        <Header/>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Navbar/>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
