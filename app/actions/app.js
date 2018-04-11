import connect, { setConnection } from './../connectors'
import { selectDatabase } from './database'

export const TOGGLE_ACCORDION_DATABASE = Symbol('@@database/TOGGLE_ACCORDION_DATABASE')
export const toggleAccordionDatabase = () => {
  return {
    type: TOGGLE_ACCORDION_DATABASE
  }
}