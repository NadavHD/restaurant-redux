import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Page404 from '../components/Page404'
import Layout from './Layout'
import Home from '../components/Home'
import ResDetails from '../components/ResDetails'
import CreateRes from '../components/CreateRes'
const AppRoutes = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element = {<Layout/>}>
              <Route index element = {<Home/>}/>
              <Route path='/resdetails/:id' element = {<ResDetails/>}/>
              <Route path='/createres' element={<CreateRes/>}/>

            </Route>
            <Route path='*' element ={<Page404/>}/>
          </Routes>
        </Router>
        </div>
  )
}

export default AppRoutes