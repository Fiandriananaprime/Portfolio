import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portfolio from './components/portfolio'
import './portfolio.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
