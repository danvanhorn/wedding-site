import React from 'react'
import { Container, Header, Image} from 'semantic-ui-react'

export const Invitation = () => 
    <Container textAlign='center'>
        <Header as='h1'>You're Invited...</Header>
        <Image src='./images/0.jpg' wrapped />
        <Header as='h3'>To the marriage of Daniel Van Horn and Rosanna Rocha.</Header>
        <Image src='./images/tree.png' size='medium' wrapped />
    </Container>