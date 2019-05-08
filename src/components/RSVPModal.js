import React from 'react'
import validator from 'validator'
import { Button, Modal, Form, Checkbox } from 'semantic-ui-react'



export class RSVPModal extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      plusOne: false,
      showModal: false
    }

    this.submitRSVP = this.submitRSVP.bind(this)
    this.isValid = this.isValid.bind(this)
    this.closeModal = this.closeModal.bind(this)
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
    event.preventDefault();
    const { firstName, lastName, email, plusOne } = this.state 
    if(this.isValid()) {
      window.fetch(`https://nodejs.vanhornd.now.sh/rsvp`, { 
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ firstName, lastName, email, plusOne })
      })
      .then(async response => {
        const { firstName, lastName } = await response.json()
        if(response.status === 202) {
          this.setState({ message: `${firstName} ${lastName} has already submitted their RSVP.`})
        } else {
          this.setState({ message: `RSVP submitted for ${firstName} ${lastName}.` })
          setTimeout(this.closeModal(), 3000)
        }
      })
      .catch(err => console.error(err))
    }
    
  }

  closeModal = () => {
    this.setState({ 
      showModal: false,
      message: ''
    })
  }

  render() {
    const { showModal } = this.state
    return <Modal open={showModal} onClose={this.closeModal} trigger={<Button onClick={() => this.setState({ showModal: true })} color='red'>RSVP Online</Button> }>
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
          <Checkbox label='Plus one?' value={this.state.plusOne} onChange={(event) => this.setState({ plusOne: !this.state.plusOne })}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  }

}