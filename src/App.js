import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Login from './Login';
import Sidebar from './ElementosForm/Sidebar';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Sidebar> 
    </Router>
  );
}

export default App;
