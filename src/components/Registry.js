import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'

export const Registry = () => 
    <Container textAlign="center">
        <Header as="h1">Registry</Header>
        <Icon.Group>
            <a href="https://amazon.com">
                <Icon link name="amazon" color="yellow" size="huge"></Icon>
            </a>
            <a href="https://target.com">
                <Icon link name="target" color="red" size="huge"></Icon>
            </a>
        </Icon.Group>
    </Container>