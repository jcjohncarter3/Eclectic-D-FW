import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import App from './App.jsx'
import Explore from './pages/explore.jsx'
import Live Music './pages/livemusic.jsx'
import Music venues from './pages/musicvenues.jsx'
import reviews from './pages/reviews.jsx'








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
