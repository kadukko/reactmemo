import { useEffect, useState } from "react";
import Table from "./Table";

function App() {
  const [show, setShow] = useState(false);
  const [columns, setColumns] = useState(8);
  const [tableChanges, setTableChanges] = useState(1);
  const [countRenders, setCountRenders] = useState(0);

  const render = () => {
    setCountRenders(countRenders + 1);
  };

  const toggleTable = () => {
    setShow(!show);
    setTableChanges(tableChanges + 1);
  };

  const addColumn = () => {
    setColumns(columns + 1);
  };

  return (
    <div className="App">
      <button onClick={() => render(render + 1)}>Render</button>
      <button onClick={() => toggleTable()}>Toggle table</button>
      <button onClick={() => toggleTable()}>Update table</button>
      <button onClick={() => addColumn()}>Add column</button>
      <span>Columns: {columns}</span>

      <Table show={show} columns={columns} rows={1000} changes={tableChanges} />
    </div>
  );
}

export default App;
