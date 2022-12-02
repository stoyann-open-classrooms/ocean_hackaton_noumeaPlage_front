import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Home from "./pages/Home";
// === Layout components

// === Pages

function App() {
  return (
    <>
      <Router>
        <h1>
          
        </h1>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
