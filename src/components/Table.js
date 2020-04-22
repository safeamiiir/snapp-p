import React from "react";

function Table() {

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
    "team_position"
  ];
  return (
    <table id="players-table" className="table table-bordered">
      <thead>
        {
          // Show table's header code
        }
      </thead>
      <tbody>
        {
          // Show item's row code
        }
      </tbody>
    </table>
  );
}

export default Table;
