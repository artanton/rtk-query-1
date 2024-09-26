import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://recursive-todo-api.onrender.com/api';

// axios.defaults.baseURL = 'https://668c2ba00b61b8d23b0ca4de.mockapi.io';
// axios.defaults.baseURL = 'https://recusive-todolist-nest-mongo.onrender.com'
axios.defaults.baseURL = 'http://localhost:4000';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ text, date, parentId, subLevel }, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', {
        text,
        date,
        parentId,
        subLevel,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',

  async ({ taskId, text }, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${taskId}`, { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
