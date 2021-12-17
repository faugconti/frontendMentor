import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import styles from "./Filter.module.css";

const ActiveFilters = () => {
  const { filters, dispatch } = useContext(FilterContext);

  return (
    <>
      {filters.length > 0 && (
        <div className={styles.filterContainer}>
          <ul className={styles.activeFilters}>
            <div className={styles.FilterList}>
              {filters.map((filter) => (
                <li className={styles.Tag} key={filter}>
                  {filter}
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FILTER", payload: { filter } })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                    >
                      <path
                        fill="#FFF"
                        fill-rule="evenodd"
                        d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </div>
            <div
              onClick={() => dispatch({ type: "CLEAR_ALL" })}
              className={styles.clear}
            >
              Clear
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default ActiveFilters;
