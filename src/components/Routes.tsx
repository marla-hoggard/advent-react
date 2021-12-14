import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SolutionPage from "./Solution/SolutionPage";
import CalendarPage from "./Calendar/CalendarPage";
import Homepage from "./Homepage/Homepage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/:year/:day" component={SolutionPage} />
      <Route exact path="/:year" component={CalendarPage} />
      <Route exact path="/" component={Homepage} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
