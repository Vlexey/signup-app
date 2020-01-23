import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp/SignUp";
import { Route, Switch } from "react-router-dom";
import WellcomePage from "./Wellcome Page/WellcomePage";
import Login from "./Login/Login";
import Home from "./Home/Home";


class App extends Component {
  state = {
    isLogin: false
  };

  onSignUp = () => this.setState({ isLogin: true });
  onLogout = () => this.setState({ isLogin: false });

  render() {

    const {isLogin} = this.state;

    return (
      <div className="App container">
        <div className="signUpForm">
          <Switch>
          <Route path="/" exact  render={() => <Home isLogin={isLogin} onLogout={this.onLogout} />} />

          <Route
            path="/auth" exact            
            render={() => (
              <WellcomePage
                isLogin={isLogin}
                onSignUp={this.onSignUp}
              />
            )}
          />

          
          <Route
            path="/login" exact            
            render={() => (
              <Login isLogin={isLogin} onSignUp={this.onSignUp} />
            )}
          />
          <Route
            path="/signup" exact            
            render={() => (
              <SignUp isLogin={isLogin} onSignUp={this.onSignUp} />
            )}
          />

          </Switch>
          
        </div>
      </div>
    );
  }
}
export default App