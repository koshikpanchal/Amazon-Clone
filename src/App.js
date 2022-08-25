import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import "./App.css";

const promise = loadStripe(
  "pk_test_51LPromSAYZ1o8yQ3hVEt4gdGyW2SxO04mk51S8lgesc0Ce0eLQw3Fw4vMRmzw7aLTKyF91mSAeyuHUYl7mcL3kkg00SMFPeSS8"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        //if user is login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //if user is logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/payment">
          <Elements stripe={promise}>
            <Payment></Payment>
          </Elements>
        </Route>
        <Route path="/orders" component={Orders}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
