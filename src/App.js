import React from 'react'
import AppRoutes from './router/AppRoutes'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const App = () => {
  const myStore = configureStore({
    reducer:{
      
    }
  })
  return (
    <Provider store={myStore}>
      <AppRoutes/>
      </Provider>
  )
}

export default App