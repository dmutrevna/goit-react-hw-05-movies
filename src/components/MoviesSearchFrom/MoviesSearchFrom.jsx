import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchButton,
  SearchForm,
  SearchInput,
} from './MoviesSearchFrom.styled';

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
    <SearchForm onSubmit={handleFormSubmit}>
      <SearchInput type="text" value={value} onChange={handleChange} />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

MoviesSearchFrom.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default MoviesSearchFrom;
