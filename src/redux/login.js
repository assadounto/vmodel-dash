import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendURL } from './http';

const initialState = {
  user: null,
  all:null,
  loading: false,
  error: null,
  islogin: false,
};

export const userLogin = createAsyncThunk(
    'auth/login',
    async (cred, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
          `${backendURL}/login`,
          cred,
          config
        )
        // store user's token in local storage
        localStorage.setItem('userToken', data.data.token)
        localStorage.setItem('data', JSON.stringify(data))
        window.location.replace('dashboard/admin')
        console.log(data)
        return data
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
  



export const userSlice = createSlice({
  name: 'user',
  initialState,
   reducers:{
    setall(state,action){
       state.all=action.payload
    },
    setuser(state,action){
      state.user=action.payload
   },

   },
  extraReducers: {
    [userLogin.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [userLogin.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.user = payload
      },
      [userLogin.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
  },
});

export const {setall,setuser} = userSlice.actions;

export default userSlice.reducer;