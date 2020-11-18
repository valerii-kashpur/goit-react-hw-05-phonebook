import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import transition from "styled-transition-group";

const BUTTON = styled.button`
  &:hover {
    background-color: #3197fd;
  }
  width: 45px;
  height: 25px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
  border: none;
  border-radius: 5px;
  background-color: #ff335c;
  cursor: pointer;
`;

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <>
      <p>{name}:</p>
      <span>{number}</span>
      <BUTTON type="button" onClick={() => onRemove(id)}>
        Delete
      </BUTTON>
    </>
  );
};

export default  ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
