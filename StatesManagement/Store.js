import { configureStore } from '@reduxjs/toolkit'
import TodoReducerslice from './reducers/TodosReducerslice'

const Store = configureStore({
  reducer: {
   todo:TodoReducerslice
  },
})

export default Store
