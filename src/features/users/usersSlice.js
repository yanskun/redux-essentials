import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from '../../api/client'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.users
})

const initialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      return action.payload
    },
  },
})

export default usersSlice.reducer

export const selectAllUsers = (state) => state.users

export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === userId)
