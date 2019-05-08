import React from 'react'
import { Container, Divider, Header, Image, Card, Icon, Embed } from 'semantic-ui-react'
import { RSVPModal } from './components/RSVPModal'

const App = ({ mobile }) => (
    <Container ui text>
      <Container textAlign='center'>
        <Header as='h1'>You're Invited...</Header>
        <Image src='./images/0.jpg' wrapped/>
        <Header as='h1'>To the marriage of Daniel Richard Van Horn and Rosanna Rocha Luna</Header>
      </Container>

      <Divider />

      <Container textAlign='left'>
        <Header as='h1' textAlign='center'>The Couple</Header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Container>

      <Divider />

      <Container textAlign='center'>
        <Header as='h1'>Location</Header>
        <Card.Group centered>
            <Card centered>
              <Embed 
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5684.59148523422!2d-123.28276557476512!3d44.57051716640207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c040a2486ddeb5%3A0x7de6e84d62a7217b!2sTyler+Townhomes!5e0!3m2!1sen!2sus!4v1557079360716!5m2!1sen!2sus"
                defaultActive
                />
              <Card.Content>
                <Card.Header as='h4'>The Ceremony</Card.Header>
                <Card.Meta>Date/Time<br/>Address</Card.Meta>
              </Card.Content>
            </Card>            
            <Card centered>
            <Embed 
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.1226602889983!2d-123.08668068494222!3d45.22508637909886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549545d4d6614bd1%3A0xba7a6247361479af!2s14905+SE+Foster+Rd%2C+Dayton%2C+OR+97114!5e0!3m2!1sen!2sus!4v1557079323943!5m2!1sen!2sus"
                defaultActive
              />
              <Card.Content>
                <Card.Header as='h4'>The Reception</Card.Header>
                <Card.Meta>Date/Time<br/>Address</Card.Meta>
              </Card.Content>
            </Card>
        </Card.Group>
      </Container>

      <Container textAlign='center'>
          <RSVPModal />
        </Container>

      <Divider />

      <Container textAlign='center'>
        <Header as='h1'>Contact</Header>
        <Card.Group centered>
          <Card>
            <Image src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/42283808_10214674829479375_6159875854366146560_n.jpg?_nc_cat=108&_nc_ht=scontent-sea1-1.xx&oh=57004a8d22d5b496f3f763ad0302ddec&oe=5D2F04D3'/>
            <Card.Content>
              <Card.Header>Rosy Rocha</Card.Header>
              <Card.Meta>The Bride</Card.Meta>
              <Card.Description>
                <div>
                  <a href="tel:19717060291">
                    <Icon name="phone" size="large"></Icon>
                  </a>
                  <a href="https://www.facebook.com/rosy.rocha">
                    <Icon name="facebook official" size="large"></Icon>
                  </a>
                  <a href="https://www.instagram.com/rosy_rocha/?hl=en">
                    <Icon name="instagram" size="large"></Icon>
                  </a>
                </div>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/52403881_10216479165664744_7406411050272161792_o.jpg?_nc_cat=109&_nc_ht=scontent-sea1-1.xx&oh=a8a2c2da67a477cd58e087334832918d&oe=5D6F3537'/>
            <Card.Content>
              <Card.Header>Dan Van Horn</Card.Header>
              <Card.Meta>The Groom</Card.Meta>
              <Card.Description>
                <div>
                  <a href="tel:19717060291">
                    <Icon name="phone" size="large"></Icon>
                  </a>
                  <a href="https://www.facebook.com/dan.vanhorn.14">
                    <Icon name="facebook official" size="large"></Icon>
                  </a>
                  <a href="https://www.instagram.com/daniel_van_horn/?hl=en">
                    <Icon name="instagram" size="large"></Icon>
                  </a>  
                </div>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>

        <Divider hidden/>

      </Container>
      <p>Copyright 2019 Dan Van Horn</p>
    </Container>  
)

export default App
