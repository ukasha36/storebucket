import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import './App.css'
import Filter_Product from './context/hooks/filterProduct'
import AppProvider from './context/hooks/productContext'
import { Theme } from './styles/ThemeAndVariables'
import CartContext from './context/hooks/cartContext'
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-kcuz25q7fuetkr3b.us.auth0.com'
      clientId='PuOWjjndv7yMLbArZPjJpaFLCjOGX4Go'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <ThemeProvider theme={Theme}>
        <AppProvider >
          <Filter_Product>
            <CartContext>
              <App />
            </CartContext>
          </Filter_Product>
        </AppProvider>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
