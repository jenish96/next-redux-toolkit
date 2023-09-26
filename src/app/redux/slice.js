const { createSlice, nanoid, current } = require("@reduxjs/toolkit")


const initialState = {
    users: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
}

const Slice = createSlice({
    name: "add user slice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log("action--", action)
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data)
            let userData = JSON.stringify(current(state.users))
            localStorage.setItem("user", userData)
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                console.log("local",localStorage.getItem(item.id))
                return item.id != action.payload
            })
            state.users = data
        }
    }
})

export const { addUser, removeUser } = Slice.actions

export default Slice.reducer