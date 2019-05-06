import React from 'react'
import { Button, Modal, Form, Checkbox } from 'semantic-ui-react'

export class RSVPModal extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      plusOne: false
    }

    this.submitRSVP = this.submitRSVP.bind(this);
  }

  submitRSVP(event) {
    alert(this.state.firstName);
    event.preventDefault();
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
          <Checkbox label='Plus one?' onChange={(event) => this.setState({ plusOne: event.target.value })}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  }

}