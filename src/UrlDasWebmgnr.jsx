import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import App from "./App";
import jwt_decode from "jwt-decode";
import DashboardManagement from "./components/dashboard/Dashboard-Management";
import { useSelector } from "react-redux";
import PageNotFound from "./components/common/PageNotFound";
import ProfileDashboardMgnt from "./components/profile_dashboard/ProfileDashboardMgnt";
// import LoadingPage from "./common/LoadingPage";
function UrlDasWebmgnr() {
  const [loggedIn, setLoggedIn] = useState(true);
  const histroy = useHistory();
  const role = "USER";
  // const [loading, setLoading] = useState(false);
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  function tokenManager() {
    const token = localStorage.getItem("refresh");
    let decoded;
    try {
      decoded = jwt_decode(token);
    } catch (e) {
      localStorage.clear();
    }
    const loggedIn = decoded && decoded.jti ? true : true;
    setLoggedIn(loggedIn);
    // setLoading(false);
  }
  useEffect(() => {
    // setLoading(true);
    histroy.listen(() => tokenManager());
    tokenManager();
  }, [histroy]);

  return (
    <div className={`relative ${darkmode ? "dark" : ""}`}>
      <Switch>
        <Route path="/page-not-found" component={PageNotFound} />
        {loggedIn && role === "SA" && (
          <Route path="/dashboard" component={DashboardManagement} />
        )}
        {loggedIn && role === "USER" && (
          <Route path="/profile" component={ProfileDashboardMgnt} />
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
