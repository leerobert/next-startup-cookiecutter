import React, { ReactNode } from "react"
import Navigation from "./navigation"

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <Navigation>
    {props.children}
  </Navigation>
);

export default Layout;
