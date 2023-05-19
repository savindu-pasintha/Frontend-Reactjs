import { configureStore } from '@reduxjs/toolkit'
import TodoReducerslice from './reducers/TodosReducerslice'
import UserSigninReducerslice from './reducers/UserSigninReducerslice'

const Store = configureStore({
  reducer: {
   todo:TodoReducerslice,
   profile:UserSigninReducerslice
  },
})

export default Store
