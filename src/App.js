import { Switch, Route } from "react-router-dom";
import LoginRegister from "./components/authentiction/LoginRegister/LoginRegister";
import Home from "./components/web/home/home/Home";
import NavBar from "./components/web/static/NavBar";
import EmailVerify from "./components/authentiction/email-verification/EmailVerify";
import EmailVerification from "./components/authentiction/password-reset/EmailVerification";
import PasswordReset from "./components/authentiction/password-reset/PasswordReset";
function App({ loggedIn }) {
  return (
    <div className="font-header bg-white">
      <NavBar loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/email-verify/:token" component={EmailVerify} />
        <Route exact path="/confirmemail" component={EmailVerification} />
        <Route
          exact
          path="/user/password-reset/:uidb64/:token"
          component={PasswordReset}
        />
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
