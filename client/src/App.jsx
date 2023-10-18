import TopHeader from "./components/ComponentHeader/TopHeader";
import LayoutSideBar from "./components/ComponentMenu/LayoutSideBar";
import MainAuthencation from "./config/routes/MainAuthencation";
import MainRoute from "./config/routes/MainRoute";

const App = () => {

  const AUTHENCATION = true

  return (
    <div className="container__app">
      {
        AUTHENCATION ?

          <MainAuthencation /> :

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
      }

    </div>
  )
}
export default App;
