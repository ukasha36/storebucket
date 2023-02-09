import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import './App.css'
import AppProvider from './context/hooks/productContext'
import { Theme } from './styles/ThemeAndVariables'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <AppProvider >
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
