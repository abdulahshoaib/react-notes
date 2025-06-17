import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/slice.js'

export default configureStore({
  reducer: {
    paste: pasteReducer,
  },
})