import { useState } from 'react'

import './App.css'
import { NavLink, useLoaderData } from 'react-router-dom'
import CoffeCard from './CoffeCard'

function App() {

  const coffeeList=useLoaderData()
  return (
    <>
      <h1>Coffee Eporium</h1>
      <NavLink to='/addcoffee'><button className='btn'>Add Coffee</button></NavLink>
      <NavLink to='/updatecoffee'><button className='btn'>Update Coffee</button></NavLink>
      <div>
        {
          coffeeList.map(coffee=><CoffeCard key={coffee._id} coffee={coffee}></CoffeCard>)
        }
      </div>
    </>
  )
}

export default App
