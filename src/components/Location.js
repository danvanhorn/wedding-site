import React from 'react'
import { Container, Header, Card, Embed } from 'semantic-ui-react'

export const Location = () => 
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
                    <Card.Meta textAlign="left">August 31, 2019 / Time<br />17120 NE Fairview Dr.<br /> Dundee OR 97115</Card.Meta>
                </Card.Content>
            </Card>
            <Card centered>
                <Embed
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.923589945555!2d-123.06488768377042!3d45.289765753085554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549540c2f9723503%3A0x662d1f1541be1ceb!2s17120+NE+Fairview+Dr%2C+Dundee%2C+OR+97115!5e0!3m2!1sen!2sus!4v1557286110594!5m2!1sen!2sus"
                    defaultActive
                />
                <Card.Content>
                    <Card.Header as='h4'>The Reception</Card.Header>
                    <Card.Meta textAlign="left">August 31, 2019 / Time<br />17120 NE Fairview Dr.<br /> Dundee OR 97115</Card.Meta>
                </Card.Content>
            </Card>
        </Card.Group>
    </Container>