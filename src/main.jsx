import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/normalize.css'
import './styles/index.css'
import App from './App.jsx'
import API from './components/API.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
