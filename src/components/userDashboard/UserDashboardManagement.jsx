import React from "react";
import { Route, Switch, useHistory } from "react-router";
import UserAside from "./static/UserAside";
import User from "./User";
import Bookmark from "./Bookmark";
import History from "./History";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
import UserNavBar from "./static/UserNavBar";
function UserDashboardManagement({ loggedIn }) {
  const history = useHistory();
  return (
    <div className="bg-lightWhite dark:bg-gray-900 h-screen flex gap-4 font-rubik relative ">
      <UserAside />
      <div className="flex-1 flex flex-col  overflow-auto">
        <UserNavBar />
        <div className="mt-5">
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
    </div>
  );
}

export default UserDashboardManagement;
