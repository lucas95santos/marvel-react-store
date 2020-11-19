import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface RouteWrapperProps extends RouteProps {
  component: React.FunctionComponent;
  isPrivate?: boolean;
}

const RouteWrapper: React.FunctionComponent<RouteWrapperProps> = ({
  component: Component,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isPrivate,
  ...rest
}) => {
  return <Route {...rest} component={Component} />;
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
