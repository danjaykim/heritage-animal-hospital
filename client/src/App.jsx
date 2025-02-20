import { Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer'
import './index.css'

export default function App() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
