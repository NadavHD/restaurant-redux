import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Page404 from '../components/Page404'
import Layout from './Layout'
const AppRoutes = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element = {<Layout/>} >

            </Route>
            <Route path='*' element ={<Page404/>}/>
          </Routes>
        </Router>
        </div>
  )
}

export default AppRoutes