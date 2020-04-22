import React from "react";

function SortBox({clicked, setClicked, changeFilters}) {
  const fields = ["age", "short_name", "value"];

  const changeSelectedSort = (field) => {
    let newClicked = [...clicked];
    let index = clicked.findIndex((item) => item.id === field);
    newClicked[index] = { id: field, state: (newClicked[index]["state"] + 1) % 3 };
    setClicked(newClicked);
    changeFilters(index)
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
          key={field}
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
