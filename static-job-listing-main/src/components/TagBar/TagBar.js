import React from "react";
import Tag from "../Tag/Tag";
import styles from "./Tags.module.css";

const TagBar = ({ tags }) => {
  return (
    <ul className={styles.Tags}>
      {tags.map((tag) => (
        <Tag key={tag.id} tagName={tag} />
      ))}
    </ul>
  );
};

export default TagBar;
