import React from 'react'
import { Container, Divider, Header, Image, Card } from 'semantic-ui-react'
import { RSVPModal } from './components/RSVPModal'

const App = ({ mobile }) => (
    <Container ui text>
      <Container textAlign='center'>
        <Header as='h1'>You're Invited...</Header>
        <Image src='./images/0.jpg' wrapped/>
        <Header as='h2'>To the marriage of Daniel Richard Van Horn and Rosanna Rocha Luna</Header>
      </Container>

      <Divider />

      <Container textAlign='center'>
        <RSVPModal />
      </Container>

      <Divider />

      <Container textAlign='center'>
            <Header as='h4'>The Ceremony</Header>
            <iframe title="ceremony" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5684.59148523422!2d-123.28276557476512!3d44.57051716640207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c040a2486ddeb5%3A0x7de6e84d62a7217b!2sTyler+Townhomes!5e0!3m2!1sen!2sus!4v1557079360716!5m2!1sen!2sus" width="400" height="300" frameborder="0" style={{ border: "0"}} allowfullscreen></iframe>
            <Divider horizontal/>
            <Header as='h4'>The Reception</Header>
            <iframe title="reception" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.1226602889983!2d-123.08668068494222!3d45.22508637909886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549545d4d6614bd1%3A0xba7a6247361479af!2s14905+SE+Foster+Rd%2C+Dayton%2C+OR+97114!5e0!3m2!1sen!2sus!4v1557079323943!5m2!1sen!2sus" width="400" height="300" frameborder="0" style={{ border: "0"}} allowfullscreen></iframe>
      </Container>

      <Divider />

      <Container textAlign='center'>
        <Header as='h4'>Contact</Header>
        <Card.Group centered>
          <Card>
            <Image src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/42283808_10214674829479375_6159875854366146560_n.jpg?_nc_cat=108&_nc_ht=scontent-sea1-1.xx&oh=57004a8d22d5b496f3f763ad0302ddec&oe=5D2F04D3'/>
            <Card.Content>
              <Card.Header>Rosy</Card.Header>
              <Card.Meta>The Bride</Card.Meta>
              <Card.Description>put contact info here...</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/52403881_10216479165664744_7406411050272161792_o.jpg?_nc_cat=109&_nc_ht=scontent-sea1-1.xx&oh=a8a2c2da67a477cd58e087334832918d&oe=5D6F3537'/>
            <Card.Content>
              <Card.Header>Dan</Card.Header>
              <Card.Meta>The Groom</Card.Meta>
              <Card.Description>put contact info here...</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>

        <Divider hidden/>

      </Container>
      <p>Copyright 2019 Dan Van Horn</p>
    </Container>  
)

export default App
