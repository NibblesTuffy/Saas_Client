import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux/es'
import { store } from './store'
import { Auth0Provider } from '@auth0/auth0-react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const domain = process.env.REACT_APP_AUTH0_DOMAIN
const client_id = process.env.REACT_APP_AUTH0_CLIENT_ID
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={domain}
        clientId={client_id}
        redirectUri={window.location.origin}
      >
        <BrowserRouter>
          <App />
          <ToastContainer position="top-center" />
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
)
