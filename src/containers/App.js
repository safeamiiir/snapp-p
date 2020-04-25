import React, { useState } from "react";
import Table from "../components/Table";
import FilterBox from "../components/FilterBox";
import SortBox from "../components/SortBox";
import players from "../data/Players";

function App() {
  let allPlayers = players.map((player, index) => {
    player.index = index;
    return player;
  });
  // Define your state
  const fields = ["age", "short_name", "value"];
  const [clicked, setClicked] = useState(fields.map((field) => ({ id: field, state: 0 })));
  const [all, setAll] = useState(allPlayers);
  const [myFilter, setMyFilter] = useState(all);

  const changeSort = (key) => {
    // 0 => no Change
    // 1 => Ascending
    // 2 => Descending
    if (clicked[key]["state"] === 0) {
      setAll(all.sort((a, b) => (b[fields[key]] > a[fields[key]] ? 1 : -1)));
    } else if (clicked[key]["state"] === 1) {
      setAll(all.sort((a, b) => (a[fields[key]] > b[fields[key]] ? 1 : -1)));
    } else {
      setAll(all.sort((a, b) => a["index"] - b["index"]));
    }
  };

  const changeFilters = (inp, filter) => {
    for (let property in inp) {
      if (inp.hasOwnProperty(property) && inp[property]) {
        console.log('property', property)
        console.log('filter', filter)
        setMyFilter(myFilter.filter( item => item[filter] === property))
      }
      else {
        setMyFilter(all)
      }
    }
  };

  const renderTable = () => {
    return <Table players={myFilter} />;
  };

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-lg-2 col-12">
          <FilterBox changeFilters={changeFilters} />
        </div>
        <div className="col-lg-10 col-12">
          <SortBox clicked={clicked} setClicked={setClicked} changeSort={changeSort} />
          {renderTable()}
        </div>
      </div>
    </div>
  );
}

export default App;
