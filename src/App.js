import { Switch, Route } from "react-router-dom";
import LoginRegister from "./components/authentiction/LoginRegister/LoginRegister";
import Home from "./components/web/home/home/Home";
import NavBar from "./components/web/static/NavBar";
import EmailVerify from "./components/authentiction/email-verification/EmailVerify";
function App({ loggedIn }) {
  return (
    <div className="font-header bg-white">
      <NavBar loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/email-verify/:token" component={EmailVerify} />
        {!loggedIn && (
          <>
            <Route exact path="/login" component={LoginRegister} />
          </>
        )}
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
