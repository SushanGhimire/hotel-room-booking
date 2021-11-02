import React from "react";
import { Route, Switch, useHistory } from "react-router";
import HHome from "./home/HHome";
import Room from "./rooms/Room";
import RoomsList from "./rooms/RoomsList";
import HotelAside from "./static/HotelAside";
import HotelNavBar from "./static/HotelNavBar";
function HotelDashboardMgnt() {
  const history = useHistory();
  return (
    <div className="bg-lightWhite dark:bg-gray-900 h-screen flex font-rubik relative ">
      <HotelAside />
      <div className="flex-1 flex flex-col overflow-auto">
        <HotelNavBar />
        <Switch>
          {/* <Route exact path="/dashboard/home" component={Home}></Route> */}
          <Route exact path="/h-dashboard" component={HHome}></Route>
          <Route exact path="/h-dashboard/add-room" component={Room}></Route>
          <Route exact path="/h-dashboard/add-room/:id" component={Room}></Route>
          <Route
            exact
            path="/h-dashboard/add-room/:id"
            component={Room}
          ></Route>
          <Route
            exact
            path="/h-dashboard/rooms-list"
            component={RoomsList}
          ></Route>
          <Route
            path="*"
            render={() => {
              history.push("/page-not-found");
            }}
          />
        </Switch>
      </div>
    </div>
  );
}

export default HotelDashboardMgnt;
