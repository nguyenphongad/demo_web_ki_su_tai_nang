import React from 'react'
import Logo_IUH from '../../assets/logo_iuh.png'

const TopHeader = () => {
    return (
        <div className='container__header'>
            <div className="tr__header">
                <div className="flex__line">
                    <div className="box__logo">
                        <a href="">
                            <img src={Logo_IUH} atl="logo_iuh"  className='image_logo'/>
                        </a>
                    </div>
                    <div>
                        as
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader