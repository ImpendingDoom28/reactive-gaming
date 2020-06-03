import React from "react";
import { getAllRoutes } from "../../js/services/RoutesService";
import { Switch } from "react-router-dom";

const Container = (props) => {
  const routes = getAllRoutes();
  return <Switch location={props.location}>{routes}</Switch>;
};

export default Container;
