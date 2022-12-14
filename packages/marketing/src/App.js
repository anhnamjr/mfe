import { StylesProvider } from "@material-ui/core/styles";
import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export default function App() {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}
