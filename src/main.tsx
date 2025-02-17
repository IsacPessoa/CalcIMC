import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalCss } from './styles'
import Home from './pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalCss />
    <Home />
  </StrictMode>
)
