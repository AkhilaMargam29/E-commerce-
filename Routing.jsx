import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayOut from './LayOut'
import Product from './Product'
import Cart from './Cart'
import Order from './Order'
import CheckOut from './CheckOut'

let route=createBrowserRouter([
    {
        path:"/",
        element:<LayOut/>,
       children:[
        {
            index:true,
            element:<Product/>
        },
        {
            path:"/cart/:id",
            element:<Cart/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"/order/:id",
           element:<Order/>
        },
        {
            path:"/order",
            element:<Order/>
        },
        {
            path:"/Checkout",
            element:<CheckOut/>
        }
       ]
    }
])
const Routing = () => {
  return (
   <RouterProvider router={route}></RouterProvider>
  )
}
export default Routing;