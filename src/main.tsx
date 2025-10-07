import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResponsiveLayout } from './components/ResponsiveLayout'
import '../tailwind.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResponsiveLayout />
  </React.StrictMode>,
)
