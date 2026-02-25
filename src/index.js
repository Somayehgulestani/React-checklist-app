import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { Product } from './products'
import { App } from './trip'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Product /> */}
    <App />
  </React.StrictMode>
)
