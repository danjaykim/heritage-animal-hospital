import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [],
    },
])

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element was not found')

console.table(import.meta.env)

const root = createRoot(rootElement)
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
