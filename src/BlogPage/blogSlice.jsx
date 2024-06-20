import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: 'Blog',
  initialState: [],
  reducers: {
    addblog:(state, action)=> {
      return[...state,action.payload]
    },
    updateblog: (state, action) => {
      const index = state.findIndex((blog) => blog.id === action.payload.id);
      if (index !== -1) {
        state[index]=action.payload;
      }
    },
    removeblog: (state, action) => {
   return state.filter((blog) => blog.id !== action.payload);
    },
    clearblog:(state)=>{
       return [];
    },

  },
});

export const {addblog,updateblog,removeblog,clearblog}=BlogSlice.actions
export default BlogSlice.reducer

