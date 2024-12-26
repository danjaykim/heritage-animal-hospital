import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import './index.css'

export default function App() {
    return (
        <>
            <h1>Heritage of NorthWest Arkansas</h1>
            <Outlet />
        </>
    )
}
