import { Outlet, ScrollRestoration } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer'
import './index.css'

export default function App() {
    return (
        <>
            <ScrollRestoration />
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
