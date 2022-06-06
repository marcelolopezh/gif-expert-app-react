import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState('');
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue,...categories]);
      setinputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="strokeSubtitle">Añadir Categoría</h2>
      <input type="text" placeholder="Escribe para buscar una categoría" value={inputValue} onChange={handleInputChange} />
      <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
    </form>
  );
};
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}