import React from 'react';
import PropTypes from 'prop-types';

function AnimeCard({ title, imageUrl, description, genres }) {
  return (
    <div className="anime-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="genres">
        {genres.map((genre) => (
          <span key={genre} className="genre">
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}

AnimeCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnimeCard;
