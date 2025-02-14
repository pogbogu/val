import { Route, Routes } from "react-router";
import "./App.css";

import Card from "./SECTION/Card";
import Love from "./SECTION/Love";

import Layout from "./SECTION/Layout";
import Ring from "./SECTION/Ring";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Love />} />
            <Route path="/card" element={<Card />} />
            <Route path="/memories" element={<Ring />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
