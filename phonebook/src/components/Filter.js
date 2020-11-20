import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const INPUT = styled.input`
  width: 260px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #808080;
  padding: 10px;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;


const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <Label htmlFor="filter">Find contact by name</Label>
      <INPUT
        id="filter"
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
