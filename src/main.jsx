import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/generic/reset.css'
import './styles/settings/coolors.css'
import './styles/Elements/base.css'

import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
)
