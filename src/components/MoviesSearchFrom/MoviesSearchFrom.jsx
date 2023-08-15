import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MoviesSearchFrom = ({ handleSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

MoviesSearchFrom.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default MoviesSearchFrom;
