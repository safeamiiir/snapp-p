import React from "react";
import players from "../data/Players";

function Table() {
  console.log("players", players);
  // Use this for showing thead
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
          players.map((player) => (
            <tr>
                {fields && fields.map((field) =>
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
