// Libraries
import React from 'react'
import { Container, Row, Col,Form, FormGroup, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem, Label, Input, Button } from 'reactstrap'
import SideBar from './side-bar'
import MainContaint from './main-containt/results'

const list_1 = []

const list = [
  "PRODUCTS",
  "STORES",
  "CUSTOMERS",
  "CUSTOMERS_DETAILS",
  "TRANSACTION",
  "TRANSACTION_DETAILS"
]

const favoris = [
  "USERS",
  "PRODUCTS"
]


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

function TableContainer({ databases, favoris }) {
  if (databases.length > 0) {
    return (
      <div className="table-container">

        <p className="m-0"><b>Base de donnée</b> :</p>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">localhost</a></BreadcrumbItem>
          <BreadcrumbItem active>tiilted</BreadcrumbItem>
        </Breadcrumb>
        <hr/>

        <Form className="quick-search-container">
          <FormGroup>
            <Label for="quick-search">Recherche rapide</Label>
            <Input type="email" name="q" id="quick-search" />
          </FormGroup>
        </Form>

        <h3>Tables :</h3>
        <ListGroup>
          <SideBar />
        </ListGroup>

        <Button color="success" className="my-2"><i className="fas fa-plus"></i> Ajouter une table</Button>

        <div className="table-favoris-container my-4">
          <p>Dernières tables consultées :</p>
          <ListGroup>
            {favoris.sort().map((table, index) => (<ListGroupItem tag="a" href="#" key={index}>{table}</ListGroupItem>))}
          </ListGroup>
        </div>
      </div>
    )
  } else {
    return (
      <div className="table-container">
        <p className="m-0">Il n'y a aucunes tables dans la base de données</p>
        <Button color="primary">Créer une nouvelle table</Button>
      </div>
    )
  }
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
          <TableContainer databases={list} favoris={favoris} />
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
