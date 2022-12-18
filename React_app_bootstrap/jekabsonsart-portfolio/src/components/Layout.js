import React from 'react';
import Container from 'react-bootstrap/container';

export default function Layout(props) {
  return <Container>{props.children}</Container>;
}
