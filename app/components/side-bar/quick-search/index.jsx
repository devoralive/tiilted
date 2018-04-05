import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const QuickSearchContainer = () => (
  <Form className="quick-search-container">
    <FormGroup>
      <Label for="quick-search">Recherche rapide</Label>
      <Input type="email" name="q" id="quick-search" />
    </FormGroup>
  </Form>
)

export default QuickSearchContainer
