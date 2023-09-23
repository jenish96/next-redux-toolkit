"use client"

import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice"

const DisplayUser = () => {
    const userData = useSelector((data) => data.users)
    const dispatch = useDispatch()
    console.log("user--", userData)
    return (
        <div className="user-display">
            <h2>Display User</h2>
            {
                userData?.map((item, index) =>
                    <div className="user-item" key={index}>
                        <span>
                            {item.name}
                        </span>
                        <button onClick={() => dispatch(removeUser(item.id))}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}

export default DisplayUser