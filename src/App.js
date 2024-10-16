import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./Page/Login"
import Signup from "./Page/Signup"
import Dashboard from "./Page/Dashboard"
import Navbar from './Section/Navbar'

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route to="/" element={<Home/>}/>
        <Route to="/login" element={<Login/>}/>
        <Route to="/signup" element={<Signup/>}/>
        <Route to="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;