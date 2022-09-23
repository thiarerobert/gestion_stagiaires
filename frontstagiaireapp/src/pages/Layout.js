import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Layout.css';

export default function Layout() {
    return <div className="layout">
                <Header/>
                <Outlet className= 'outlet' />
                <Footer />
            </div>
}