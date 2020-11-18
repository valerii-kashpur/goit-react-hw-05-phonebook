import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactListItem from "./ContactListItem";
import styled from "styled-components";
import PropTypes from "prop-types";
import LI from "../StyledComponents/Item";
import { TransitionGroup } from "react-transition-group";

const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  height: auto;
  list-style: none;
  margin: 0;
  padding: 10px 0;
`;

const ContactList = ({ filterFN, onRemove }) => {
  return (
    <TransitionGroup component={UL}>
      {filterFN().map(({ id, name, number }) => (
        <LI key={id}>
          <ContactListItem
            key={uuidv4()}
            id={id}
            name={name}
            number={number}
            onRemove={onRemove}
          />
        </LI>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterFN: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
