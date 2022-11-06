import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './features/locationSlice'
export default configureStore({
  reducer: {
    location: locationReducer
  }
})