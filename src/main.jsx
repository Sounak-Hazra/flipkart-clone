import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from './components/Details.jsx'
import Userdetailspage from './components/Userdetailspage.jsx'
import Lastpaymentpage from './components/Lastpaymentpage.jsx'
import Paymwnt from './components/Paymwnt.jsx'
import Paymentsuccessfull from './components/Paymentsuccessfull.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/details/prduct",
    element: <Userdetailspage />
  },
  {
    path: "details/prduct/payment",
    element: <Lastpaymentpage />
  },
  {
    path: "details/prduct/payment/pay",
    element: <Paymwnt />
  },
  {
    path: "details/prduct/payment/pay/paymentuccess",
    element: <Paymentsuccessfull />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
