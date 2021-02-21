import React from "react";

interface Route {
  path: string;
  name: string;
  icon: string;
  component: React.Component;
}

export const routes: Route[] = [];
