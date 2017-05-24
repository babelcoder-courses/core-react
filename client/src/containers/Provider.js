import PropTypes from 'prop-types'
import { withContext } from 'recompose'

const Provider = ({ children }) => children

export default withContext(
  { store: PropTypes.object },
  ({ store }) => ({ store })

)(Provider)
