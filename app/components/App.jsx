// Libraries
import React from 'react';
import {Container, Row, Col,Form, FormGroup, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem, Label, Input, Button} from 'reactstrap';

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

function TableContainer(props) {
  if (props.tables.length > 0)
  {
    return (
      <div className="table-container">
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>

        <Form className="quick-search-container">
          <FormGroup>
            <Label for="quick-search">Recherche rapide</Label>
            <Input type="email" name="q" id="quick-search" />
          </FormGroup>
        </Form>

        <ListGroup>
          {props.tables.sort().map(function (table, index) { return <ListGroupItem tag="a" href="#" key={index}>{table}</ListGroupItem> })}
        </ListGroup>

        <Button color="success" className="my-2"><i className="fas fa-plus"></i> Ajouter une table</Button>

        <div className="table-favoris-container my-4">
          <p>Dernières tables consultées :</p>
          <ListGroup>
            {props.tablesFavoris.sort().map(function (table, index) { return <ListGroupItem tag="a" href="#" key={index}>{table}</ListGroupItem> })}
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

// Components
const App = () => (
  <div className="App">
    <Container fluid={true}>
      <Row>
        <Col md="4">
          <TableContainer tables={list} tablesFavoris={favoris} />
        </Col>

        <Col md="8">
          <Row className="query-container">
            <Col>
              Mon texte
            </Col>
          </Row>

          <Row className="result-container">
            <Col md="12">Résultats de la query</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
