import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Footer from "./footer"


export const AppLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet/>
        <Footer/>
    </>
  )
}


