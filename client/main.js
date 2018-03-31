import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import { renderRoutes } from "../imports/startup/client/routes.js";
import App from "../imports/ui/App.js";

// Matt Lieber
//    |
//   \/
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById("render-target"));
});
