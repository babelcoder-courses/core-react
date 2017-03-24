import React, { PropTypes } from 'react'

const RouteComponent = (props, context) => (
  props.path === context.path && (
    React.createElement(props.component)
  )
)

RouteComponent.propTypes = {
  path: PropTypes.string.isRequired
}

RouteComponent.contextTypes = {
  path: PropTypes.string.isRequired
}

export default RouteComponent