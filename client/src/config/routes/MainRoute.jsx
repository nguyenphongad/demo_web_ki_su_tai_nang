import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutLogin from '../../pages/PageLogin/LayoutLogin'
import PageHome from '../../pages/PageHome/PageHome'
import PlanProgress from '../../pages/PageStudy/PlanProgress'
import DegressCertificates from '../../pages/PageStudy/DegressCertificates'
import TraningProcess from '../../pages/PageStudy/TraningProcess'
import Achievements from '../../pages/PageStudy/Achievements'
import StudyPlans from '../../pages/PageStudy/StudyPlans'
import PageNews from '../../pages/PageNews/PageNews'
import PageMessenger from '../../pages/PageMessenger/PageMessenger'
import LayoutNotFound from '../../pages/PageNotFound/LayoutNotFound'

const MainRoute = () => {
    return (
        <>
            <Routes>

                <Route path="/" index element={<PageHome />} />
                <Route path="/home" element={<Navigate to="/" replace={true} />} />

                <Route path="/news" element={<PageNews />} />
                <Route path="/messenger" element={<PageMessenger />} />
                <Route path="*" element={<LayoutNotFound />} />

                {/* <Route path="/study/:id" element={<PlanProgress/>}> */}

                    <Route path="/plan-progress" element={<PlanProgress />} />
                    <Route path="/degress-certificates" element={<DegressCertificates />} />
                    <Route path="/traning-process" element={<TraningProcess />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/study-plan" element={<StudyPlans />} />
                    

                {/* </Route> */}

            </Routes>
        </>
    )
}

export default MainRoute