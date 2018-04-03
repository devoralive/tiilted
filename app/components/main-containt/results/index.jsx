import React from 'react'
import { Table } from 'reactstrap'
import Header from './header'
import Rows from './rows'

const Results = () => (
  <Table responsive size="sm">
    <Header />
    <Rows />
  </Table>
)

export default Results