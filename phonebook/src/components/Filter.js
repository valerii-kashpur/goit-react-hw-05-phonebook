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

// const Container = styled.div.attrs({
//   unmountOnExit: true,
//   timeout: 500,
// })`
//   width: 300px;
//   height: max-content;
//   border: none;
//   border-radius: 3px;
//   box-shadow: 2px 2px 7px -1px rgba(158, 158, 158, 0.71);
//   padding: 20px;
//   margin-bottom: 20px;
// `;

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
