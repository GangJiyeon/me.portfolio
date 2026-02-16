import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import WallyScoreDetail from './pages/WallyScoreDetail'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/wally-score" element={<WallyScoreDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
