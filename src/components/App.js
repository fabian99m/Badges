import React from "react";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetails from "../pages/BadgeDetails";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import { BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter  >
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:BadgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:BadgeId" component={BadgeDetails} />
          <Route  component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
