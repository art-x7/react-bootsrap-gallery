import React from 'react'
import Alert from 'react-bootstrap/Alert'


const MyAlert = ({ text }) => (
  <Alert variant={'danger'}>
    {text}
  </Alert>
)

export default MyAlert