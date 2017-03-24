import React, { PropTypes } from 'react'
import classNames from 'classnames'

const handleClick = (to, onPathChange) => event => {
  event.preventDefault()
  onPathChange(to)
}

const getClassNames = (className, to, path) => {
  return classNames(
    className,
    { active: to === path }
  )
}

const LinkComponent = 
  ({ className, to, children }, { path, onPathChange }) => (
  <a 
    href="#" 
    className={ getClassNames(className, to, path) }
    onClick={ handleClick(to, onPathChange) }>
    { children }
  </a>
)

LinkComponent.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

LinkComponent.contextTypes = {
  path: PropTypes.string.isRequired,
  onPathChange: PropTypes.func.isRequired
}

export default LinkComponent