import DashBoard from "pages/DashBoard";
import Home from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/dashboard" exact>
        <DashBoard />
      </Route>
    </Switch>
    </BrowserRouter>
 );
};

export default Routes;