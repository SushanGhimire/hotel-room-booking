import { Route, Switch } from "react-router";
import DashboardHome from "./dashboardHome/DashboardHome";
import NavBar from "./static/NavBar";
import Aside from "./static/Aside";

function DashboardManagement() {
  return (
    <div className="bg-white dark:bg-gray-900 h-screen flex font-rubik relative ">
      <Aside />
      <div className="flex-1 flex flex-col overflow-auto">
        <NavBar />
        <Switch>
          {/* <Route exact path="/dashboard/home" component={Home}></Route> */}
          <Route exact path="/dashboard" component={DashboardHome}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default DashboardManagement;
