// Libraries
import React from 'react'
import { Container, Row, Col,Form, FormGroup, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem, Label, Input, Button } from 'reactstrap'
import SideBar from './side-bar'
import MainContaint from './main-containt/results'



function TableRow({ index, name }) {
  return (
    <ListGroupItem key={index} className="px-0">
      <a href="#" className="mx-2"><i className="far fa-star text-warning"></i></a>
      <a href="#">{name}</a>
      <div className="float-right">
        <a href="#" className="mx-1"><i className="fas fa-pencil-alt text-primary"></i></a>
        <a href="#" className="mx-1"><i className="fas fa-trash-alt text-danger"></i></a>
      </div>
    </ListGroupItem>
  )
}

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
