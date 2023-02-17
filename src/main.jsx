import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import './App.css'
import Filter_Product from './context/hooks/filterProduct'
import AppProvider from './context/hooks/productContext'
import { Theme } from './styles/ThemeAndVariables'
import CartContext from './context/hooks/cartContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <AppProvider >
        <Filter_Product>
          <CartContext>
            <App />
          </CartContext>
        </Filter_Product>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
