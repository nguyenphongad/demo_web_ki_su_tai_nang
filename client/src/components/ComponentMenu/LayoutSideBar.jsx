import React from 'react'
import { NavLink } from 'react-router-dom';
import { BiSolidHome } from 'react-icons/bi';
import { HiNewspaper } from 'react-icons/hi'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
const LayoutSideBar = () => {

    const ARRAY_LIST_MENU = [
        {
            id: 0,
            name_menu: "Trang chủ",
            icon_before: <BiSolidHome />,
            to_link: "/",
            submenu: false,
        },
        {
            id: 1,
            name_menu: "Tin tức",
            icon_before: <HiNewspaper />,
            to_link: "/news",
            submenu: false,
        },
        {
            id: 2,
            name_menu: "Tin nhắn",
            icon_before: <BiSolidMessageDetail />,
            to_link: "/messenger",
        },
        {
            id: 3,
            name_menu: "Học tập",
            icon_before: <BsFillBookmarkCheckFill />,
            submenu: true,
            // to_link:"/plan-progress",
            sub_menu_item: [
                {
                    id: 0,
                    sub_name_menu: "Tiến độ kế hoạch",
                    sub_icon_before: "?",
                    sub_to_link: "/plan-progress"
                },
                {
                    id: 1,
                    sub_name_menu: "Bằng cấp và chứng chỉ",
                    sub_icon_before: "?",
                    sub_to_link: "/degress-certificates",
                },
                {
                    id: 2,
                    sub_name_menu: "Quá trình đào tạo",
                    sub_icon_before: "?",
                    sub_to_link: "/traning-process",
                },
                {
                    id: 3,
                    sub_name_menu: "Thành tích",
                    sub_icon_before: "?",
                    sub_to_link: "/achievements",
                },
                {
                    id: 4,
                    sub_name_menu: "Lập kế hoạch học tập",
                    sub_icon_before: "?",
                    sub_to_link: "/study-plan",
                },
            ]
        },
        // {
        //     id: 4,
        //     name_menu: "Menu Main Demo",
        //     icon_before: "?",
        //     to_link: "#",
        //     submenu: false,
        // },
        // {
        //     id: 5,
        //     name_menu: "Menu Main Demo",
        //     icon_before: "?",
        //     to_link: "#",
        //     submenu: false,
        // },
    ];
    const renderArrMenu = ARRAY_LIST_MENU.map((item) => {
        return (
            <>
                {
                    item.submenu ?
                        <div
                            key={item.id}
                            className="item_menu_a"
                        >
                            {item.icon_before}
                            {item.name_menu}
                        </div>
                        :
                        <NavLink
                            key={item.id}
                            className="item_menu_a"
                            to={item.to_link}
                        >
                            {item.icon_before}
                            {item.name_menu}
                        </NavLink>
                }

                {
                    item.submenu ?
                        <div className='box_sub_menu_item'>
                            {
                                item.sub_menu_item.map((item_sub) => {
                                    return (
                                        <NavLink
                                            key={item_sub.id}
                                            className="sub_menu_item"
                                            to={item_sub.sub_to_link}>
                                            {item_sub.sub_name_menu}
                                        </NavLink>
                                    )
                                })
                            }
                        </div>

                        : undefined
                }
            </>
        )
    })


    return (
        <div className='container__menu'>
            <div className="wrap__menu">
                <div className="flex__box">
                    {renderArrMenu}
                </div>
            </div>
        </div>
    )
}

export default LayoutSideBar