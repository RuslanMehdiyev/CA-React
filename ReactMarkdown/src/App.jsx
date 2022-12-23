import "./assets/style.css";
import EditNote from "./components/EditNote";
import { Routes, Route, NavLink } from "react-router-dom";
import Markdown from "./components/Markdown";
import { useState } from "react";
function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <NavLink to={"/"}>Edit</NavLink>
          </li>
          <li>
            <NavLink to={"/markdown"}>Preview</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<EditNote setText={setText} text={text} />} />
        <Route path="/markdown" element={<Markdown text={text} />} />
      </Routes>
    </div>
  );
}

export default App;
