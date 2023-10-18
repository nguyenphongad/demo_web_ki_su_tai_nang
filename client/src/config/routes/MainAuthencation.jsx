import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutLogin from '../../pages/PageLogin/LayoutLogin'

const MainAuthencation = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<LayoutLogin/>}/>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
        </>
    )
}

export default MainAuthencation