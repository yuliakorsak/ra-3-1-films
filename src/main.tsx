import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Stars from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Stars count={3} />
  </StrictMode>,
)
