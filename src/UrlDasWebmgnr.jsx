import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import App from "./App";
import jwt_decode from "jwt-decode";
import DashboardManagement from "./components/dashboard/Dashboard-Management";
import { useSelector, useDispatch } from "react-redux";
import PageNotFound from "./components/common/PageNotFound";
import ProfileDashboardMgnt from "./components/profile_dashboard/ProfileDashboardMgnt";
import HotelDashboardMgnt from "./components/hotel_dashboard/HotelDashboardMgnt";
import * as actions from "./redux/actions/action";
// import LoadingPage from "./common/LoadingPage";
function UrlDasWebmgnr() {
  const [loggedIn, setLoggedIn] = useState(true);
  const histroy = useHistory();
  const dispatch = useDispatch();
  const [role, setRole] = useState("H");
  // const [loading, setLoading] = useState(false);
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  function tokenManager() {
    const token = localStorage.getItem("refresh");
    let decoded;
    if (token) {
      try {
        decoded = jwt_decode(token);
        console.log(decoded);
      } catch (e) {
        localStorage.clear();
      }
      const loggedIn = decoded && decoded.exp && decoded.user_id && true;
      if (loggedIn) {
        setLoggedIn(loggedIn);
        const { user_type } = decoded;
        setRole(user_type);
        dispatch(actions.setRole(user_type));
      } else {
        window.location = "/";
        localStorage.clear();
      }
    }
  }
  useEffect(() => {
    histroy.listen(() => tokenManager());
    // eslint-disable-next-line
  }, [histroy]);

  return (
    <div className={`relative font-subHeader ${darkmode ? "dark" : ""}`}>
      <Switch>
        <Route path="/page-not-found" component={PageNotFound} />
        {loggedIn && role === "SA" && (
          <Route path="/dashboard" component={DashboardManagement} />
        )}
        {loggedIn && role === "USER" && (
          <Route path="/profile" component={ProfileDashboardMgnt} />
        )}
        {loggedIn && role === "H" && (
          <Route path="/h-dashboard" component={HotelDashboardMgnt} />
        )}
        <Route
          path="/"
          render={(props) => <App loggedIn={loggedIn} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default UrlDasWebmgnr;
