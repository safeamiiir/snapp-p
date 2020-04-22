import React from "react";

function SortBox() {
  
  // Sorting buttons 
  const fields = ["age", "short_name", "value"];

  const changeSelectedSort = (/*YOUR_PARAMETERS*/) => {
    // Your Code ...
  };

  const setClassName = (/*YOUR_PARAMETERS*/) => {
   // Default sorted => "btn-outline-primary" Non selected button (Third Click)
   // Descending sorted => "btn-success" First Click
   // Ascending sorted => "btn-info" Second Click
   // Your Code ...
  };

  return (
    <div id="sort-box-container" className="d-flex py-2">
      <button
        id="sort-btn-FIELD_NAME"
        type="button"
        className="btn mx-2 sort-btn"
      >
        {'SORT BUTTON'}
      </button>
    </div>
  );
}

export default SortBox;
