import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../home.css';

import { Container, Row, Col } from 'react-bootstrap';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
          <div>
            <div className="Home-hero-div">
              <Container>
                <Row className="align-center">
                    <div className="Home-search-bar">
                      <InputGroup size="lg">
                        <InputGroup.Prepend>
                          <Button variant="secondary" className="Home-search-bar-btn">Search</Button>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                      </InputGroup>
                    </div>
                </Row>
              </Container>
            </div>
            <div>
              <Container>
                <Row>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px180"/>
                      <Card.Body>
                        <Card.Title>Python</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="outline-success" className="Home-go-btn">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>HTML 5</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="outline-success" className="Home-go-btn">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={require("../images/logo.svg")} />
                      <Card.Body>
                        <Card.Title>React</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="outline-success" className="Home-go-btn">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        )
    }
}

Home.propTypes = {

};
