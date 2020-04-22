import React from "react";
import Table from "../components/Table";
import FilterBox from "../components/FilterBox";
import SortBox from "../components/SortBox";

function App() {
  // Define your state

  const changeSort = (_selectedSort) => {
   // ...
  };

  const changeFilters = (/*YOUR_PARAMETERS*/) => {
   // ...
  };

  const renderTable = () => {
   return null;
  };

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-lg-2 col-12">
          <FilterBox />
        </div>
        <div className="col-lg-10 col-12">
          <SortBox />
          {renderTable()}
        </div>
      </div>
    </div>
  );
}

export default App;
