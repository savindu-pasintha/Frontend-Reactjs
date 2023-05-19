import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: '',
  profile: {},
}

const UserSigninReducerSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileAction: (state, action) => {
      state.profile = action.payload
    },
    deleteProfileAction: (state, action) => {
      state.profile = {}
    },
  },
 
})

export const {
    setProfileAction,deleteProfileAction
} = UserSigninReducerSlice.actions
export default UserSigninReducerSlice.reducer
