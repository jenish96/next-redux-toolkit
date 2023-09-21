"use client"

import { useSelector } from "react-redux"

const DisplayUser = () => {
    const userData = useSelector((data) => data.users)
    console.log("user--", userData)
    return (
        <div className="user">
            <h2>Display User</h2>
            {
                userData?.map((item,index) =>
                    <div className="user-item" key={index}>{item.name}</div>
                )
            }
        </div>
    )
}

export default DisplayUser