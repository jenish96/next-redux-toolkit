"use client"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodos } from "../redux/todoSlice"

const Page = () => {
    const [name, setName] = useState()
    const dispatch = useDispatch()
    const todoDispatch = () => {
        dispatch(addTodos(name))
    }
    return (
        <div className="user">
            <h2>Add ToDO</h2>
            <input type="text" className="input" placeholder="Enter Task" onChange={(e) => setName(e.target.value)} />
            <button onClick={todoDispatch} className="btn">Submit</button>
        </div>
    )
}

export default Page