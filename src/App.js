import { Switch, Route } from "react-router-dom";
import LoginRegister from "./components/authentiction/LoginRegister/LoginRegister";
import Home from "./components/web/home/home/Home";
import NavBar from "./components/web/static/NavBar";
import Footer from "./components/web/static/Footer";
import EmailVerify from "./components/authentiction/email-verification/EmailVerify";
import EmailVerification from "./components/authentiction/password-reset/EmailVerification";
import PasswordReset from "./components/authentiction/password-reset/PasswordReset";
import Rooms from "./components/web/rooms/Rooms";
import { useSelector } from "react-redux";
function App({ loggedIn }) {
  const lang = useSelector((state) => state.darkmode.lang);
  return (
    <div className="font-header bg-white">
      <NavBar loggedIn={loggedIn} lang={lang} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home loggedIn={loggedIn} lang={lang} {...props} />
          )}
        />
        <Route
          exact
          path="/rooms"
          render={(props) => (
            <Rooms loggedIn={loggedIn} lang={lang} {...props} />
          )}
        />
        <Route
          exact
          path="/user/email-verify/:token"
          render={(props) => (
            <EmailVerify loggedIn={loggedIn} lang={lang} {...props} />
          )}
        />
        <Route
          exact
          path="/confirmemail"
          render={(props) => (
            <EmailVerification loggedIn={loggedIn} lang={lang} {...props} />
          )}
        />
        <Route
          exact
          path="/user/password-reset/:uidb64/:token"
          render={(props) => (
            <PasswordReset loggedIn={loggedIn} lang={lang} {...props} />
          )}
        />
        {!loggedIn && (
          <>
            <Route
              exact
              path="/login"
              render={(props) => (
                <LoginRegister loggedIn={loggedIn} lang={lang} {...props} />
              )}
            />
          </>
        )}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
