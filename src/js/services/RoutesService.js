import React from "react";
import { Route } from "react-router-dom";
import JoinGame from "../../components/joinGame/JoinGame";
import CreateGame from "../../components/createGame/CreateGame";
import Root from "../../components/root/Root";
import WithHeaderPage from "../../components/withHeaderPage/WithHeaderPage";
import Rules from "../../components/rules/Rules";

const routesData = [
  {
    path: "/join",
    isExact: true,
    render: () => (
      <WithHeaderPage>
        <JoinGame />
      </WithHeaderPage>
    ),
  },
  {
    path: "/create",
    isExact: true,
    render: () => (
      <WithHeaderPage>
        <CreateGame />
      </WithHeaderPage>
    ),
  },
  {
    path: "/rules",
    isExact: true,
    render: () => (
      <WithHeaderPage>
        <Rules />
      </WithHeaderPage>
    ),
  },
  {
    path: "/game/:code",
    isExact: true,
    render: () => {},
  },
  {
    path: "/",
    isExact: true,
    render: () => <Root />,
  },
];

const routesComponents = routesData.map((elem) => (
  <Route
    key={elem.path}
    path={elem.path}
    exact={elem.isExact}
    component={elem.component || elem.render}
  />
));

const routes = [...routesComponents];

export const getAllRoutes = () => {
  return routes;
};
