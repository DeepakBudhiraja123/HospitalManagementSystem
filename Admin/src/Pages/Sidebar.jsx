import React, { useContext, useState } from "react";
import { Context } from "../index.js";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateto = useNavigate();
  const gotoHome = () => {
    navigateto("/");
    setShow(!show);
  };
  const gotoDoctors = () => {
    navigateto("/doctors");
    setShow(!show);
  };
  const gotoMessage = () => {
    navigateto("/message");
    setShow(!show);
  };
  const addNewDoctor = () => {
    navigateto("/doctor/addnew");
    setShow(!show);
  };
  const addNewAdmin = () => {
    navigateto("/admin/addnew");
    setShow(!show);
  };
  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <>
      <nav
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}
      >
        <div className="links">
          <TiHome onClick={gotoHome} />
          <FaUserDoctor onClick={gotoDoctors} />
          <MdAddModerator onClick={addNewAdmin} />
          <IoPersonAddSharp onClick={addNewDoctor} />
          <AiFillMessage onClick={gotoMessage} />
          <RiLogoutBoxFill onClick={handleLogout} />
        </div>
      </nav>
      <div className="wrapper" style={!isAuthenticated? {display: "none"}: {display: "flex"}}>
        <GiHamburgerMenu className="hamburger" onClick={()=> setShow(!show)}/>
      </div>
    </>
  );
};

export default Sidebar;
