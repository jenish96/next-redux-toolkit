const { configureStore } = require("@reduxjs/toolkit")
import userReducer from "./slice"
import todoReducer from "./todoSlice"

export const Store = configureStore({
    reducer: {
        userData: userReducer,
        todosData: todoReducer
    }
})