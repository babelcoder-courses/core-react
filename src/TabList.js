import React, { PropTypes } from 'react'

const TabListComponent = ({ children }) => (
  <ul className="nav nav-tabs">{ children }</ul>
)

TabListComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default TabListComponent