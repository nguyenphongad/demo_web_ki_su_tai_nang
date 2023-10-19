import { Outlet } from 'react-router-dom';
import LeftSideBar from '../ComponentMenu/LayoutSideBar';
import TopHeader from '../ComponentHeader/TopHeader'; 
function Layout() {
    return (
        <div className='layout'>
            <TopHeader />
            <LeftSideBar />
            <main className='main'>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
