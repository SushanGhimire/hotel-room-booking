import React from "react";
import { Route, Switch, useHistory } from "react-router";
import PHome from "./home/PHome";
import HotelRegister from "./hotel_register/HotelRegister";
import ProfileAside from "./static/ProfileAside";
import ProfileNavBar from "./static/ProfileNavBar";
function ProfileDashboardMgnt() {
  const history = useHistory();
  return (
    <div className="bg-lightWhite dark:bg-gray-900 h-screen flex font-rubik relative ">
      <ProfileAside />
      <div className="flex-1 flex flex-col overflow-auto">
        <ProfileNavBar />
        <Switch>
          {/* <Route exact path="/dashboard/home" component={Home}></Route> */}
          <Route exact path="/profile" component={PHome}></Route>
          <Route
            exact
            path="/profile/hotel-register"
            component={HotelRegister}
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

export default ProfileDashboardMgnt;
