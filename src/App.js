import { RegisterUser } from "./Pages/RegisterUser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages/Register.css";
import LoginUser from "./Pages/Login";
import DietHome from "./Components/DietHome";
import ForgotPassword from "./Pages/ForgotPassword";
import PassLinkVerify from "./Pages/PassLinkVerify";
import PassReset from "./Pages/PassReset";
import Navbar from "./Components/Navbar";
import Userdetails from "./Components/Userdetails";
import UserInfo from "./Components/UserInfo";
import Addfood from "./Components/Addfood";
import Track from "./Components/Track";
import Recipe from "./Components/Recipe";
import Verifyuser from "./Pages/VerifyUser";

function PrivateRoute({ path, component: Component }) {
  return (
    <Route
      path={path}
      render={() => {
        const authtoken = localStorage.getItem("authtoken");

        return authtoken ? <Component /> : <h1>Login!!!</h1>;
      }}
    />
  );
}

function ConditionalRoute({ path, component: Component }) {
  return (
    <Route
      path={path}
      render={({ location }) => {
        return location.pathname === "/" ||
          location.pathname === "/register" ||
          location.pathname === "/forgotpassword" ||
          location.pathname === "/userdetails" ? (
          <></>
        ) : (
          <Component />
        );
      }}
    />
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/passverifylink/:userId/:token"
            component={PassLinkVerify}
          />
          <Route path="/resetpassword/:userId/:token" component={PassReset} />
          <Route path="/verifyuser/:id" component={Verifyuser} />

          <ConditionalRoute path="/" component={Navbar} />
        </Switch>
        <Switch>
          <Route exact path="/" component={LoginUser} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <PrivateRoute path="/diethome" component={DietHome} />
          <PrivateRoute path="/userdetails" component={Userdetails} />
          <PrivateRoute path="/UserInfo" component={UserInfo} />
          <PrivateRoute path="/addfood" component={Addfood} />
          <PrivateRoute path="/recipe" component={Recipe} />

          <PrivateRoute path="/track" component={Track} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
