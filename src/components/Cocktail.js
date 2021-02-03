import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, image, name, info, glass }) => {
  return (
    <article>
      <div className="img-container">
        <Link to={`/cocktail/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
      </div>
      <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
        details
      </Link>
    </article>
  );
};

export default Cocktail;
