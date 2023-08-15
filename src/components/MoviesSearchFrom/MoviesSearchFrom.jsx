import React, { useState } from 'react';

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

export default MoviesSearchFrom;
