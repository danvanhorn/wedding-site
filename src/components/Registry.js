import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'

export const Registry = () => 
    <Container textAlign="center">
        <Header as="h1">Registry</Header>
        <Icon.Group>
            <a href="https://www.amazon.com/wedding/organize-registry?ref_=wedding_subnav">
                <Icon link name="amazon" color="yellow" size="massive"></Icon>
            </a>
            <a href="https://tgt.gifts/danandrosywedding">
                <Icon link name="target" color="red" size="massive"></Icon>
            </a>
        </Icon.Group>
    </Container>