import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { List } from "./pages/users/list";
import { Create } from "./pages/users/create";
import { Edit } from "./pages/users/edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<List />} />
        <Route path="/users/:id/edit" element={<Edit />} />
        <Route path="/users/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
