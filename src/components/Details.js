import React from "react";
import { NavLink } from "react-router-dom";

const Details = props => {
  const { location,category,description,tittle } =
    (props.location && props.location.values) || {};
  return (
    <div>
      <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
      <div className="form-details">
        <div>
          <strong>Location:</strong> {location}
        </div>
        <div>
          <strong>category:</strong> {category}
        </div>
        <div>
          <strong>description:</strong> {description}
        </div>
        <div>
          <strong>tittle:</strong> {tittle}
        </div>
      </div>
    </div>
  );
};

export default Details;
