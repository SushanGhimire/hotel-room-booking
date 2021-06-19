import { Switch, Route } from "react-router-dom";
import Home from "./web/home/Home";

function App(props) {
  const { loggedIn } = props;
  return (
    <div>
      {/* <NavBar loggedIn={loggedIn} /> */}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
