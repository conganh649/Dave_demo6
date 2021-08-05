import React from "react";

import "./resources/styles.css";
import TableItem from "./components/table/TableItem";

function App() {
  return (
    <div>
      <h1>Welcome to my flower Manager</h1>
      <h3>
        Click In stock button to change state - delete button to delete - update
        not working yet
      </h3>
      <TableItem />
    </div>
  );
}

export default App;
