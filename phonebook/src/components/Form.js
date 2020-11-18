import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BUTTON = styled.button`
  &:hover {
    background-color: #3197fd;
  }
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: teal;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;

const FORM = styled.form`
  width: 300px;
  height: max-content;
  border: none;
  border-radius: 3px;
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 20px;
`;

const Input_form = styled.input`
  border: 1px solid #808080;
  margin: 10px 0 30px;
  padding: 10px;
`;

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getUserById = (arr, name) =>
    arr.find((x) => x.name === name || x.number === name);

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const number = this.state.number;
    const contacts = this.props.contacts;
    this.getUserById(contacts, name) || this.getUserById(contacts, number)
      ? this.props.setError(true, name)
      : this.props.onAddContact(this.state.name, this.state.number);
  };

  render() {
    return (
      <>
        <FORM onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name <br/></label>
          <Input_form
            type="text"
            onChange={this.handleChange}
            id="name"
            name="name"
          />
          <br/>
          <label htmlFor="number">Number <br/></label>
          <Input_form
            type="text"
            onChange={this.handleChange}
            id="number"
            name="number"
          />
          <BUTTON type="submit">Add contact</BUTTON>
        </FORM>
      </>
    );
  }
}
