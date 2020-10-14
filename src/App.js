import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./Views/Login/Login";
import MovieListing  from "./Views/MovieListing/MovieListing";
export const hist = createBrowserHistory();
export default () => (
  <BrowserRouter history={hist}>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/movie-listing" exact component={MovieListing} />
  </Switch>
</BrowserRouter>
);
