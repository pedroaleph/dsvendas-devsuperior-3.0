import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DashBoard from "pages/DashBoard";
import Home from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard" exact>
          <DashBoard />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;