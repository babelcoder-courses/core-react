import React, { PropTypes } from 'react'

const TabPaneComponent = ({ children }) => (
  <div className='tab-pane active'>
    { children }
  </div>
)

TabPaneComponent.propTypes = {
  children: PropTypes.string.isRequired
}

export default TabPaneComponent