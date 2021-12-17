import React, { useContext } from "react";
import styles from "./Tag.module.css";
import { FilterContext } from "../../context/FilterContext";

const Tag = ({ tagName }) => {
  const { dispatch } = useContext(FilterContext);
  return (
    <li
      onClick={() =>
        dispatch({ type: "ADD_FILTER", payload: { filter: tagName } })
      }
      className={styles.Tag}
    >
      {tagName}
    </li>
  );
};

export default Tag;
