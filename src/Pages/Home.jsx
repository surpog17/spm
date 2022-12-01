import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="btn-container">
      <NavLink to="/Solutions" className="link-btn">
        Go to solutions
      </NavLink>
    </div>
  );
}
