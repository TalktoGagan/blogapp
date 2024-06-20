import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../SignInPage/UserSlice";
import BlogSlice from "../BlogPage/blogSlice";

const Store=configureStore({
    reducer:{
        Auth:UserSlice,
        Blog:BlogSlice,
    }
})

export default Store;