import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import App from './App'
import AddCoffee from './AddCoffee';
import UpdateCoffee from './UpdateCoffee';

const router = createBrowserRouter([
    

            {
                path:'/',
                element:<App></App>,
                loader:()=>fetch('http://localhost:5000/coffee')
            },
            {
                path:'addcoffee',
                element:<AddCoffee></AddCoffee>
            },
            {
                path:'updatecoffee/:id',
                element:<UpdateCoffee></UpdateCoffee>,
                loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
            },
        
    
])

export default router;