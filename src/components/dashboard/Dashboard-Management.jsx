import { Route, Switch } from "react-router";
import DashboardHome from "./dashboardHome/DashboardHome";

function DashboardManagement() {
  return (
    <div className="bg-white h-screen flex font-rubik relative">
      {/* <Aside /> */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* <NavBar handleVerify={handleVerify} /> */}
        <Switch>
          {/* <Route exact path="/dashboard/home" component={Home}></Route> */}
          <Route exact path="/dashboard" component={DashboardHome}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default DashboardManagement;
