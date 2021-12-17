import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import TagBar from "../TagBar/TagBar";

const Card = ({ job }) => {
  const {
    company,
    logo,
    new: isNew,
    featured,
    postedAt,
    jobTitle,
    location,
    hours,
    tags,
  } = job;

  const { filters } = useContext(FilterContext);
  const found = filters.every((r) => tags.includes(r));

  return (
    <>
      {filters.length === 0 || (filters.length > 0 && found) ? (
        <li>
          <div className={`Card ${featured ? "featured" : ""}`}>
            <img src={require(`../../assets/images/${logo}`)} alt={`${logo}`} />
            <div className="Card__items">
              <div>
                <div className="card__header">
                  <h5 className="card__company">{company}</h5>
                  {isNew && <div className="label new">NEW!</div>}
                  {featured && <div className="label featured">FEATURED</div>}
                </div>
                <h2 className="card__title">{jobTitle}</h2>
                <div className="card__features">
                  <p className="card__features--feature">{postedAt}</p>
                  <p className="card__features--feature bullet">{hours}</p>
                  <p className="card__features--feature bullet">{location}</p>
                </div>
              </div>
              <TagBar className="card__tags" tags={tags} />
            </div>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default Card;
