import React from "react";
import players from "../data/Players";

function Table() {
  const fields = [
    "#",
    "short_name",
    "age",
    "nationality",
    "club",
    "overall",
    "value",
    "preferred_foot",
    "team_position",
  ];
  return (
    <table id="players-table" className="table table-bordered">
      <thead>
        <tr>{fields && fields.map((field) => <th>{field}</th>)}</tr>
      </thead>
      <tbody>
        {players &&
          players.map((player, index) => (
            <tr>
              <td>
                {index + 1}
              </td>
                {fields && fields.slice(1).map((field) =>
                <td>
                  {player[field]}
                </td>
                )}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
