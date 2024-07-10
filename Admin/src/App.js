import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import Login from "./Pages/Login.jsx";
import AddNewDoctor from "./Pages/AddNewDoctor.jsx";
import Doctors from "./Pages/Doctors.jsx";
import AddNewAdmin from "./Pages/AddNewAdmin.jsx";
import Message from "./Pages/Message.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { Context } from "./index.js";
import axios from "axios"
import "./App.css"
import Sidebar from "./Pages/Sidebar.jsx";

const App = () => {
  const {isAuthenticated, setIsAuthenticated, user, setUser} = useContext(Context);

  useEffect(()=>{
    const fetchUser = async ()=>{
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/admin/me", {withCredentials: true})
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    }
    fetchUser();
  }, [isAuthenticated])
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor/addnew" element={<AddNewDoctor />} />
          <Route path="/admin/addnew" element={<AddNewAdmin />} />
          <Route path="/message" element={<Message />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
