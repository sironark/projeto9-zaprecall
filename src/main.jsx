import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import styled from 'styled-components'
import Reset from './reset.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Reset/>
      <App />
 
  </React.StrictMode>,
)

