import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar, isTemplatePage }) => {
  return (
    <nav className={`navbar ${isTemplatePage ? "nav-clr" : "nav-clear"}`}>
      <div className="nav-center">
        <div className="nav-header">
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
