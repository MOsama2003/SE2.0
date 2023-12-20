import "boxicons/css/boxicons.min.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarOpenBtn = document.querySelector("#sidebar-open");
    const sidebarCloseBtn = document.querySelector("#sidebar-close");
    const sidebarLockBtn = document.querySelector("#lock-icon");

    const toggleLock = () => {
      sidebar.classList.toggle("locked");
      if (!sidebar.classList.contains("locked")) {
        sidebar.classList.add("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
      } else {
        sidebar.classList.remove("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
      }
    };

    const hideSidebar = () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
      }
    };

    const showSidebar = () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
      }
    };

    const toggleSidebar = () => {
      sidebar.classList.toggle("close");
    };

    sidebar.classList.remove("locked");
    sidebar.classList.add("hoverable");
    sidebar.classList.add("close");

    sidebarLockBtn.addEventListener("click", toggleLock);
    sidebar.addEventListener("mouseleave", hideSidebar);
    sidebar.addEventListener("mouseenter", showSidebar);
    sidebarOpenBtn.addEventListener("click", toggleSidebar);
    sidebarCloseBtn.addEventListener("click", toggleSidebar);

    return () => {
      sidebarLockBtn.removeEventListener("click", toggleLock);
      sidebar.removeEventListener("mouseleave", hideSidebar);
      sidebar.removeEventListener("mouseenter", showSidebar);
      sidebarOpenBtn.removeEventListener("click", toggleSidebar);
      sidebarCloseBtn.removeEventListener("click", toggleSidebar);
    };
  }, []);

  return (
    <>
      <nav className={`sidebar ${props.a ? "a" : ""} hoverable close`}>
        <div className="logo_items flex">
          <span className="logo_name">Software Department</span>
          <i
            className="bx bx-lock-open-alt"
            id="lock-icon"
            title="Lock Sidebar"
          ></i>
          <i className="bx bx-x" id="sidebar-close"></i>
        </div>
    <div className="menu_container">
      <div className="menu_items">
        <ul className="menu-flex menu_item">
          <li className="item">
            <Link to="/" className="link flex">
              <i className="bx bx-home-alt"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/Department" className="link flex">
                <i className='bx bx-buildings'></i>
              <span>Department</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/Teachers" className="link flex">
              <i className="bx bxs-magic-wand"></i>
              <span>Teachers</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/Courses" className="link flex">
              <i className='bx bxs-book' ></i>
              <span>Course Scheme</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/Timetable" className="link flex">
              <i className='bx bx-table' ></i>
              <span>Timetable</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/Awards" className="link flex">
              <i className="bx bx-award"></i>
              <span>Award</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/Admin" className="link flex">
              <i className="bx bx-male"></i>
              <span>Admin</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
          </nav>
      <nav className="navbar flex">
        <i className="bx bx-menu" id="sidebar-open"></i>
      </nav>
    </>
  );
};

export default Header;