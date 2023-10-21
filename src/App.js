import "./App.css";
import Content from "./Component/Content/Content";
import NavVertical from "./Component/NavVertical/NavVertical";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <NavVertical />
        <Content />
      </div>
    </BrowserRouter>
  );
}