// Outlet dit au rooter où mettre le reste du code
import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'
import '../style/components/header.css'


export default function RootLayout() {
    return (
        <div className="root-layout">
            <header className="header-layout">
                <img src={logo} alt='logo Kasa' className="logo" />
                <nav className="header-nav-bar">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="about" className="aboutShrink">A Propos</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}