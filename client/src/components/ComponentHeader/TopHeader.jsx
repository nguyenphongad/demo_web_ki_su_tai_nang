import React from 'react'
import Avatar_default from "../../assets/avatar_default.jpg";
import { IoNotificationsSharp } from 'react-icons/io5';
import { BsDot } from 'react-icons/bs';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import ComponentInput from '../ComponentForm/ComponentInput';

const TopHeader = () => {
    return (
        <div className='container__header'>
            <div className="tr__header">
                <div className="flex__line">
                    <div>
                        <ComponentInput
                            iconBefore={<ImSearch />}
                            placeholder="Search"
                            className="box_search"
                            id="search_box"
                        />
                    </div>
                    <div className="box__control">
                        <div className="btn__noti">
                            <IoNotificationsSharp />
                            <div className="length__noti">
                                <Link to="/notification">
                                    <BsDot />
                                </Link>
                            </div>
                        </div>
                        <div className="border__account">
                            <div className="btn_dropdown">
                                <img src={Avatar_default} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader