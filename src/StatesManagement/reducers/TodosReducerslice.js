import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: '',
  todos: [],
}

const TodosReducerSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodosAction: (state, action) => {
      state.todos = [...state.todos,action.payload]
    },
    deleteTodosAction: (state, action) => {
      state.todos = state.todos.filter((item)=> item?.id !== action.payload)
    },
  },
 
})

export const {
  setTodosAction,deleteTodosAction
} = TodosReducerSlice.actions
export default TodosReducerSlice.reducer
