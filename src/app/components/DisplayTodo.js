"use client"

import { useDispatch, useSelector } from "react-redux"

const Page = () => {
    const todosData = useSelector((data) => data.todosData.todos)
    const dispatch = useDispatch()
    console.log("user--", todosData)
    return (
        <div className="user-display">
            <h2>Display ToDos</h2>
            {
                todosData?.map((item, index) =>
                    <div className="user-item" key={index}>
                        <span>
                            {item.name}
                        </span>
                        {/* <button onClick={() => dispatch(removeUser(item.id))}>Delete</button> */}
                    </div>
                )
            }
        </div>
    )
}

export default Page