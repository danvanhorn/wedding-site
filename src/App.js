import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { RSVPModal } from './components/RSVPModal'
import { Countdown } from './components/Countdown'
import { Invitation } from './components/Invitation'
import { About } from './components/About'
import { Location } from './components/Location'
import { Registry } from './components/Registry'
import { Contact } from './components/Contact'

const App = ({ mobile }) => (
    <Container text>
      <Invitation />
      <Divider hidden/>
      <Countdown/>
      <Divider />
      <About />
      <Divider />
      <Location />
      <Divider hidden/>
      <RSVPModal />
      <Divider />
      <Registry />
      <Divider />
      <Contact />
      <Divider hidden/>
      <Container textAlign="center">
        <p>Copyright 2019 Dan Van Horn</p>
      </Container>
    </Container>  
)

export default App
