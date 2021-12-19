import React from "react";
import { Route, Switch, useHistory } from "react-router";
import NavBar from "../web/static/NavBar";
import UserAside from "./static/UserAside";
import User from "./User";
import Bookmark from "./Bookmark";
import History from "./History";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
function UserDashboardManagement() {
  const history = useHistory();
  return (
    <div className="bg-lightWhite dark:bg-gray-900 h-screen flex font-rubik relative ">
      <NavBar user="user" />
      <div className="flex-1 flex  overflow-auto mt-32">
        <UserAside />
        <Switch>
          {/* <Route exact path="/dashboard/home" component={Home}></Route> */}
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/user/bookmarks" component={Bookmark}></Route>
          <Route exact path="/user/history" component={History}></Route>
          <Route exact path="/user/contact-us" component={ContactUs}></Route>
          <Route exact path="/user/faqs" component={FAQs}></Route>
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

export default UserDashboardManagement;
