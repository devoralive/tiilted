import React from 'react'

const Table = ({ name, onClick }) => (
  <li onClick={onClick}>{name}</li>
)

export default Table