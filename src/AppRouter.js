import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Spot from "./pages/Spot"

const AppRouter = () => (
    <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/spot/" component={Spot} />
    </React.Fragment>
);

export default AppRouter;