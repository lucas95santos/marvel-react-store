import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface RouteWrapperProps extends RouteProps {
  component: React.FunctionComponent;
  isPrivate?: boolean;
}

const RouteWrapper: React.FunctionComponent<RouteWrapperProps> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  return <Route {...rest} component={Component} />;
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
