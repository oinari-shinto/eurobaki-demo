
import * as React from "react"
import Footer from "../components/Footer"

import Header from "../components/Header"
import { GlobalStyle } from "../components/styles/GlobalStyles"


const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Header  />
      
      <main>{children}</main>
      <Footer />
    </>
  )
}



export default Layout
