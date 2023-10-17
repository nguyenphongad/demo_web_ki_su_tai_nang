import TopHeader from "./components/ComponentHeader/TopHeader";
import LayoutSideBar from "./components/ComponentMenu/LayoutSideBar";
import MainRoute from "./config/routes/MainRoute";

const App = () => {
  return (
    <div className="container__app">
      <div className="box_layout_body">
        <div className="tr_line_flex">
          <div className="layout_menu">
            <LayoutSideBar />
          </div>
          <div className="layout_body">
            <div>
              <TopHeader />
            </div>
            <MainRoute />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
