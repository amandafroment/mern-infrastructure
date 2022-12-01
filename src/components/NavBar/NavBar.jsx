import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <Link to="/newpage">New Page</Link>
      &nbsp; | &nbsp;
      <Link to="/newpage/details">New Page Details</Link>
      &nbsp; | &nbsp;
      {user && <span>Welcome, {user.name}</span>}
      &nbsp;{" "}
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
