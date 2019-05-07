import React from 'react'
import process from 'process'
import validator from 'validator'
import axios from 'axios'
import { Button, Modal, Form, Checkbox } from 'semantic-ui-react'

export class RSVPModal extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      plusOne: false
    }

    this.submitRSVP = this.submitRSVP.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  isValid() {
    const { firstName, lastName, email } = this.state 
    if(!firstName) {
      return false
    } else if(!lastName) {
      return false;
    } else if(!validator.isEmail(email)) {
      // prompt for valid email
      return false;
    } else {
      return true
    }

  }

  submitRSVP(event) {
    if(this.isValid()) {
      axios.post(process.env.API_URL).then(response => console.log(response))
      .catch(err => console.error(err))
    }
  }

  render() {
    return <Modal trigger={<Button color='red'>RSVP Online</Button> }>
    <Modal.Header>RSVP</Modal.Header>
    <Modal.Content>
      <Modal.Description>
      <Form onSubmit={this.submitRSVP}>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' value={this.state.firstName} onChange={(event) => this.setState({ firstName: event.target.value })}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' value={this.state.lastName} onChange={(event) => this.setState({ lastName: event.target.value })}/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })}/>
        </Form.Field>
        <Form.Field>
          <Checkbox label='Plus one?' onChange={(event) => this.setState({ plusOne: event.target.value })}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  }

}