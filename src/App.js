import { Switch, Route } from "react-router-dom";
import LoginRegister from "./components/authentiction/LoginRegister/LoginRegister";
import Home from "./components/web/home/home/Home";
import NavBar from "./components/web/static/NavBar";

function App({ loggedIn }) {
  // const { loggedIn } = props;
  console.log(loggedIn);
  return (
    <div className="font-header bg-lightWhite">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
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
