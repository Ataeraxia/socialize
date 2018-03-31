import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../../ui/App.js";

export const renderRoutes = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
