import React, { useEffect } from "react";

function Table({ columns = 0, rows = 0, show = true, changes }) {
  useEffect(() => {
    console.log("Table mounted");

    return () => {
      console.log("Table unmounted");
    };
  }, []);

  console.log("new render - " + Date.now());

  if (!show) return null;

  return (
    <table>
      <thead>
        <tr>
          {new Array(columns).fill(0).map((column, index) => (
            <td key={index}>Column {index + 1}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {new Array(rows).fill(0).map((row, indexR) => (
          <tr key={indexR}>
            {new Array(columns).fill(0).map((column, indexC) => (
              <td key={indexC}>
                Column {indexC + 1} Row {indexR + 1}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default React.memo(Table, (prev, next) => {
  return next.changes === prev.changes;
});
