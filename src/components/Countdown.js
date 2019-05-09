import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import moment from 'moment'
import countdown from 'countdown'

require('moment-countdown')


export const Countdown = () => 
  <Container textAlign="center">
    <Header as='h3'>August 31, 2019</Header>
    <Header as="h3">
      {`${moment().countdown('2019-8-31', countdown.MONTHS|countdown.DAYS).toString()} until the wedding`}
    </Header>
  </Container>