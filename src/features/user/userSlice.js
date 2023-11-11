import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
  isSidebarOpen: true,
  user: null,
  isLoading: false
}

export const getCurrentSubscription = createAsyncThunk(
  'user/getCurrentSubscription',
  async (email, thunkAPI) => {
    console.log({ email })
    try {
      const resp = await axios.get(
        process.env.REACT_APP_SERVER_ADDRESS + '/currentSubscription',
        { params: { email } }
      )
      console.log('here is in Thunk...');
      console.log(resp)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    addUser: (state, { payload }) => {
      console.log(payload)
      state.user = payload
    },
    removeUser: (state) => {
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentSubscription.pending, (state) => {
        state.isLoading = true
        console.log(state)
      })
      .addCase(getCurrentSubscription.fulfilled, (state, { payload }) => {
        state.isLoading= false
        console.log(payload)
        state.user.subscription = payload
      })
      .addCase(getCurrentSubscription.rejected, (state) => {
        state.isLoading = false
        toast.error('no valid user!')
      })
  },
})

export const { toggleSidebar, addUser, removeUser } = userSlice.actions
export default userSlice.reducer
