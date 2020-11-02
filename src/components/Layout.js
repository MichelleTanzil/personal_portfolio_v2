import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Helmet
        title="Michelle Tanzil"
        meta={[
          { name: "description", content: "Michelle Tanzil's Portfolio" },
          {
            name: "keywords",
            content:
              "software, developer, dev, full stack, builder, problem solver, Michelle, Tanzil",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
