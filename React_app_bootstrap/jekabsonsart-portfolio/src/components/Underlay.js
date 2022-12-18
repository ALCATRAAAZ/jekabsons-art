import React from 'react';
import { Navbar, NavDropdown, Carousel} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: 0.3rem;
  }
`;

export default function Underlay() {
  return (
    <Styles>
      <Container>
        <Carousel variant ="dark">
          <Carousel.Item>
            <Carousel.Caption>
              <h3 color='red'>First slide label</h3>
              <p background='red'>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <h1>This is Jekabsons family portfolio</h1>
        <p>about the pagae</p>
      </Container>
    </Styles>
  );
}
