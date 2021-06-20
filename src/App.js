import { Switch, Route } from "react-router-dom";
import Home from "./web/home/home/Home";
import NavBar from "./web/static/NavBar";

function App() {
  // const { loggedIn } = props;
  return (
    <div className="font-header bg-lightWhite">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
