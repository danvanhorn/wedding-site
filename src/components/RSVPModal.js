import React from 'react'
import validator from 'validator'
import { Container, Button, Modal, Form, Checkbox, Message } from 'semantic-ui-react'


export class RSVPModal extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      plusOne: false,
      showModal: false,
      success: false,
      error: false
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

  async submitRSVP(event) {
    event.preventDefault();
    const { firstName, lastName, email, plusOne } = this.state 
    if(this.isValid()) {
      try {
        const response = await window.fetch(`https://${process.env.API_URL}/api/rsvp`, { 
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          type: "application/json",
          body: JSON.stringify({ firstName, lastName, email, plusOne })
        })
        console.log("response ", response)
        if (response.status === 200){
          const data = await response.json()
          console.log(data)
          if(data.exists && data.exists === true) {
            console.log('data exists')
            this.setState({ error: true })
          } else {
            console.log('data created')
            this.setState({ success: true })
          }
        }
      } catch(err) {
        console.error(err)
      }
    }    
  }

  closeModal = () => {
    this.setState({ 
      firstName: '',
      lastName: '',
      email: '',
      plusOne: false,
      showModal: false,
      success: false,
      error: false
    })
  }

  render() {
    const { showModal, success, error } = this.state
    return (
    <Container textAlign="center">
      <Modal open={showModal} onClose={this.closeModal} trigger={<Button onClick={() => this.setState({ showModal: true })} color='red'>RSVP Online</Button>}>
        <Modal.Header>RSVP</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form success={success} error={error} onSubmit={this.submitRSVP}>
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' value={this.state.firstName} onChange={(event) => this.setState({ firstName: event.target.value })} />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' value={this.state.lastName} onChange={(event) => this.setState({ lastName: event.target.value })} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
              </Form.Field>
              <Form.Field>
                <Checkbox label='Plus one?' onChange={(event) => this.setState({ plusOne: !this.state.plusOne })} />
              </Form.Field>
              <Message success header='Success' content="You've submitted your RSVP" />
              <Message error header='Sorry...' content="It looks like you've already submitted an RSVP" />
              <Button type='submit' color='blue'>Submit</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Container>
    )
  }

}