import React, { PropTypes } from 'react'

const TabPanelComponent = ({ children, tabIndex }, { selectedIndex }) => (
  tabIndex === selectedIndex && (
    <div className="tab-content">
      <div className="tab-pane active">{ children }</div>
    </div>
  )
)

TabPanelComponent.propTypes = {
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.number.isRequired
}

TabPanelComponent.contextTypes = {
  selectedIndex: PropTypes.number.isRequired
}

export default TabPanelComponent