import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import './index.css'

export default function App() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}
