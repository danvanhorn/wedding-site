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
      <Divider hidden/>
      <Invitation />
      <Divider hidden/>
      <RSVPModal />
      <Divider hidden/>
      <Countdown/>
      <Divider />
      <About />
      <Divider />
      <Location />
      <Divider />
      <Registry />
      <Divider />
      <Contact />
      <Divider hidden/>
      <Container textAlign="center">
        <p style={{ color: 'grey' }}>Copyright &copy; 2019 Dan Van Horn</p>
      </Container>
    </Container>  
)

export default App
