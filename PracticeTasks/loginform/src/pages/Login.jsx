import { useState } from "react";
import User from "./User";

function Login() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userObject, setUserObject] = useState({});
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !userEmail || !userPassword) {
      alert("Please fill the data");
      return;
    }
    setUserObject({
      name: userName,
      email: userEmail,
      password: userPassword,
    });
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
              placeholder="Enter user name"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <input
              type="email"
              placeholder="Enter user email"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
            />
            <input
              type="password"
              placeholder="Enter user password"
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
            />
            <button>Register</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
