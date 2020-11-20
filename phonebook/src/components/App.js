import React, { Component } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Filter from "./Filter";
import ContactList from "./ContactList";
import styled from "styled-components";
import transition from "styled-transition-group";
import FilterContainer from "../StyledComponents/FilterContainer";

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const App_title = transition.h1.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 500,
})`
  color: #016f91;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;

  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Error = transition.div.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 500,
})`
position: absolute;
padding: 5px 10px;
width: 300px;
top: 10px;
left: 10px;
background-color: #b81d3f;
border-radius: 8px;
text-align: center;
color: white;
  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    error: false,
    name: "",
    mount: false,
  };

  componentDidMount() {
    const ghostContacts = localStorage.getItem("contacts");
    if (ghostContacts) {
      this.setState({
        contacts: JSON.parse(ghostContacts),
      });
    }
    this.setState({ mount: true });
  }
  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };

  filterFN = () => {
    const { contacts, filter } = this.state;
    const filtered = contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return filtered.length > 0 ? filtered : contacts;
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  setError = (bool, name) => {
    this.setState({ error: bool, name: name });
    setTimeout(() => {
      this.setState({ error: !bool });
    }, 3000);
  };

  removeContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    const { filter, contacts, error, name, mount } = this.state;
    return (
      <>
        <Error in={error}>
          <p>{name} is alredy in contacts!</p>
        </Error>
        <Container>
          <App_title in={mount}>Phonebook</App_title>
          <Form
            onAddContact={this.addContact}
            contacts={contacts}
            setError={this.setError}
          />
          <FilterContainer in={contacts.length > 1}>
            <Filter
              value={filter}
              onChangeFilter={this.changeFilter}
            />
          </FilterContainer>
          <ContactList filterFN={this.filterFN} onRemove={this.removeContact} />
        </Container>
      </>
    );
  }
}

export default App;
