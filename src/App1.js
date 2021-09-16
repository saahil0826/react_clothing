import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.js";
import ShopPage from "./pages/shop/shoppage.js";
import Header from "./components/header/header.js";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.js";
import { auth } from "./firebase/firebase.utils.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    // returned function will be called on component unmount
    return () => {
    unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
