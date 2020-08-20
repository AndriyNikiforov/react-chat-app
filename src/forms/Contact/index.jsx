import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import addMessage from '../../actions/index';

import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';

function mapDispatchToProps(dispatch) {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
  };
}

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;

    this.setState((state) => ({
      message: {
        ...state.message,
        [name]: value,
      },
    }));
  }

  onSubmit(event) {
    event.preventDefault();
    const { message } = this.state;

    axios.post('', message)
      .then()
      .catch();
  }

  render() {
    const { message } = this.state;

    return (
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <Label
              text="Email"
              labelFor="email"
            />
            <Input
              type="text"
              value={message.email}
              onChange={this.onChange}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <Label
              text="Message"
              labelFor="message"
            />
            <Textarea
              value={message.text}
              name="text"
              onChange={this.onChange}
              placeholder="Message"
            />
          </div>
          <div className="flex justify-center">
            <Button
              text="Send"
              name="send"
              onSubmit={this.onSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

const ContactForm = connect(null, mapDispatchToProps)(Contact);

export default ContactForm;
