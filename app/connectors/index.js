import { defaultConnection, getConnection } from './mysql'

const internals = {
  current: null,
  default: defaultConnection
}

export const setConnection = database => {
  if (!internals[database]) {
    internals[database] = getConnection(database)
  }
  internals.current = database
}

const connect = () => {
  if (internals.current) {
    return internals[internals.current]
  }
  return internals.default
}

export default connect