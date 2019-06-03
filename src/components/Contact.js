import React from 'react'
import { Container, Header, Card, Image, Icon } from 'semantic-ui-react'

export const Contact = () => 
    <Container textAlign='center'>
        <Header as='h1'>Contact</Header>
        <Card.Group centered>
            <Card>
                <Image src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/42283808_10214674829479375_6159875854366146560_n.jpg?_nc_cat=108&_nc_ht=scontent-sea1-1.xx&oh=57004a8d22d5b496f3f763ad0302ddec&oe=5D2F04D3' />
                <Card.Content>
                    <Card.Header as='h3'>Rosy Rocha</Card.Header>
                    <Card.Meta>The Bride</Card.Meta>
                    <Card.Description>
                        <div>
                            <a href="tel:19717060291">
                                <Icon link name="phone" size="large"></Icon>
                            </a>
                            <a href="mailto:danandrosywedding@gmail.com">
                                <Icon link name="mail" size="large"></Icon>
                            </a>
                            <a href="https://www.facebook.com/rosy.rocha">
                                <Icon link name="facebook official" size="large"></Icon>
                            </a>
                            <a href="https://www.instagram.com/rosy_rocha/?hl=en">
                                <Icon link name="instagram" size="large"></Icon>
                            </a>
                        </div>
                    </Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Image src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/52403881_10216479165664744_7406411050272161792_o.jpg?_nc_cat=109&_nc_ht=scontent-sea1-1.xx&oh=a8a2c2da67a477cd58e087334832918d&oe=5D6F3537' />
                <Card.Content>
                    <Card.Header as='h2'>Dan Van Horn</Card.Header>
                    <Card.Meta>The Groom</Card.Meta>
                    <Card.Description>
                        <div>
                            <a href="tel:19717060291">
                                <Icon link name="phone" size="large"></Icon>
                            </a>
                            <a href="mailto:danandrosywedding@gmail.com">
                                <Icon link name="mail" size="large"></Icon>
                            </a>
                            <a href="https://www.facebook.com/dan.vanhorn.14">
                                <Icon link name="facebook official" size="large"></Icon>
                            </a>
                            <a href="https://www.instagram.com/daniel_van_horn/?hl=en">
                                <Icon link name="instagram" size="large"></Icon>
                            </a>
                        </div>
                    </Card.Description>
                </Card.Content>
            </Card>
        </Card.Group>
    </Container>