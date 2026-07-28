import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DesignSystem from './pages/DesignSystem.jsx'

const Page = window.location.pathname.replace(/\/$/, '') === '/design-system' ? DesignSystem : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
