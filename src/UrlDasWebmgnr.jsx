import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import App from "./App";
import jwt_decode from "jwt-decode";
import DashboardManagement from "./components/dashboard/Dashboard-Management";
import { useSelector } from "react-redux";
// import LoadingPage from "./common/LoadingPage";
function UrlDasWebmgnr() {
  const [loggedIn, setLoggedIn] = useState("");
  const histroy = useHistory();
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
    const loggedIn = decoded && decoded.jti && true;
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
        {loggedIn && (
          <Route path="/dashboard" component={DashboardManagement} />
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
