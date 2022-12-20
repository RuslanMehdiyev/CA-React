import { useEffect } from "react";
import { useState } from "react";
import User from "./User";

function Login() {
  const [userObject, setUserObject] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserObject({
      ...userObject,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userObject.name && !userObject.email && !userObject.password) {
      alert("Please fill the data");
      return;
    }
    setCheck(!check);
  };

  return (
    <>
      {check ? (
        <User userObject={userObject} />
      ) : (
        <div>
          <h1>Sign Up</h1>
          <form className="login" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="name"
              placeholder="Enter user name"
              onChange={handleChange}
              value={userObject.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter user email"
              onChange={handleChange}
              value={userObject.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter user password"
              onChange={handleChange}
              value={userObject.password}
            />
            <button>Register</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
