import React from "react";
import nationality from "../data/Nationality";
import clubs from "../data/Clubs";
import team_position from "../data/TeamPositions";
function FilterBox({changeFilters}) {
  const filters = ["nationality", "club", "team_position"];
  const [itemsList, setItemsList] = React.useState({});

  const changeFilter = (e, item, filter) => {
    setItemsList({ ...itemsList, [item]: itemsList["item"] || itemsList[item] ? false : true });
    changeFilters({ ...itemsList, [item]: itemsList["item"] || itemsList[item] ? false : true }, filter)
  };

  return (
    <div className="filter-box">
      <div>
        <h5 className="card-title">Filter Box</h5>
        {
          // It's Bootstrap accordion example
          // You have to change this part base on description
        }
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  id="btn-FILTER_NAME-collapse"
                  class="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {filters[0]}
                </button>
              </h2>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                {nationality.map((item) => (
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value={item}
                      onChange={(e) => changeFilter(e, item, filters[0])}
                    />
                    <label class="form-check-label" for="inlineCheckbox1">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {filters[1]}
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                {clubs.map((item) => (
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value={item}
                      onChange={(e) => changeFilter(e, item, filters[1])}
                    />
                    <label class="form-check-label" for="inlineCheckbox1">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {filters[2]}
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                {team_position.map((item) => (
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value={item}
                      onChange={(e) => changeFilter(e, item, filters[2])}
                    />
                    <label class="form-check-label" for="inlineCheckbox1">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
