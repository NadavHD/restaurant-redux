import React from 'react'
import AppRoutes from './router/AppRoutes'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import createSlice1 from './features/createSlice1'

const App = () => {
  const myStore = configureStore({
    reducer:{
      createSlice1
    }
  })
  return (
    <Provider store={myStore}>
      <AppRoutes/>
      </Provider>
  )
}

export default App