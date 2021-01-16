import React from "react";
import { Link } from 'react-router-dom'

import "../styles/components/template.css";

export default function Template({ name, children, goTo }) {
  return (
    <div className="container-template">
      <Link to={goTo}>
        <div id="template">
          <h1>{name}</h1>
          {children}
        </div>
      </Link>
    </div>
  );
}
