"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/slice"
import Link from "next/link"

const AddUser = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const userDispatch = () => {
        dispatch(addUser(name))
    }
    return (
        <div className="user">
            <h2>Add User</h2>
            <input type="text" className="input" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
            <button onClick={userDispatch} className="btn">Submit</button>

            <Link className="btn" href={"/removeuser"}>Remove User</Link>
        </div>
    )
}

export default AddUser