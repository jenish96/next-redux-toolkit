"use client"

import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice"

const Page = () => {
    const data = useSelector((data) => data.userData.users)
    const dispatch = useDispatch()
    console.log("dtata", data)
    return (
        <div className="user">
            <h1>Remove User Page</h1>
            <h2>Display User</h2>
            {
                data?.map((item, index) =>
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

export default Page