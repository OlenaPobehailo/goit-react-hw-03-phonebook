import { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </label>

        <label htmlFor="">
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            required
          />
        </label>

        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
