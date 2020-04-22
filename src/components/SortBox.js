import React, { useState } from "react";

function SortBox() {
  const fields = ["age", "short_name", "value"];
  const [clicked, setClicked] = useState(fields.map((field) => ({ id: field, state: 0 })));

  const changeSelectedSort = (field) => {
    let newClicked = [...clicked];
    let index = clicked.findIndex((item) => item.id === field);
    newClicked[index] = { id: field, state: (newClicked[index]["state"] + 1) % 3 };
    setClicked(newClicked);
  };

  const setClassName = (field) => {
    let index = clicked.findIndex((item) => item.id === field);
    // Default sorted => "btn-outline-primary" Non selected button (Third Click)
    // Descending sorted => "btn-success" First Click
    // Ascending sorted => "btn-info" Second Click
    var sotButtonClass =
      clicked[index]["state"] === 0
        ? "btn mx-2 sort-btn btn-outline-primary"
        : clicked[index]["state"] === 1
        ? "btn mx-2 sort-btn btn-success"
        : "btn mx-2 sort-btn btn-info";
    return sotButtonClass;
  };
  return (
    <div id="sort-box-container" className="d-flex py-2">
      {fields.map((field) => (
        <button
          id={`sort-btn-${field}`}
          type="button"
          className={setClassName(field)}
          onClick={() => changeSelectedSort(field)}
        >
          {field}
        </button>
      ))}
    </div>
  );
}

export default SortBox;
