import React from "react";

function User({ userObject }) {
  console.log();
  return (
    <div className="user-page">
      <h1>Welcome, {userObject.name} how r u?;)</h1>
    </div>
  );
}

export default User;
