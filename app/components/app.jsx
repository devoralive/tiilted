// Libraries
import React from 'react'
import { Container, Row, Col,Form, FormGroup, Label, Input } from 'reactstrap'
import SideBar from './side-bar'
import MainContaint from './main-containt/results'


function QueryContainer () {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleText">Query :</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
    </Form>
  )
}

// Components
const App = () => (
  <div className="App">
    <Container fluid={true}>
      <Row>
        <Col md="4">
          <SideBar />
        </Col>

        <Col md="8">
          <Row className="query-container">
            <Col>
              <QueryContainer />
            </Col>
          </Row>

          <Row className="result-container">
            <Col md="12">
              <MainContaint />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
