import React from 'react'
import {IoNotificationsSharp} from "react-icons/io"
import { IoLogOut } from 'react-icons/io5'

const ControlBoxAccount = () => {
    const LIST_CONTROL_ACCOUNT = [
        {
            id:0,
            name_select : "Darkmode",
            icon_before: <IoNotificationsSharp/>,
        },
        {
            id:1,
            name_select : "Đăng xuất",
            icon_before: <IoLogOut/>,
        },
    ];
    const returnListControlAccount = LIST_CONTROL_ACCOUNT.map((item)=>{
        return (
            <div className='item_btn_control' key={item.id}>
                {item.icon_before}
                <div>{item.name_select}</div>
            </div>
        )
    })
    return (
        <>
            {returnListControlAccount}
        </>
    )
}

export default ControlBoxAccount