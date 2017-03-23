import React, { PropTypes } from 'react'
import classNames from 'classnames'

const linkClasses = (tabIndex, selectedIndex) => {
  return classNames(
    'nav-link',
    { active: tabIndex === selectedIndex }
  )
}

const handleClick = (onTabChange, tabIndex) => {
  return () => onTabChange(tabIndex)
}

const TabComponent = ({ children, tabIndex }, { selectedIndex, onTabChange }) => (
  <li className="nav-item">
    <a 
      href="#" 
      className={ linkClasses(tabIndex, selectedIndex) } 
      onClick={ handleClick(onTabChange, tabIndex) }>
      { children }
    </a>
  </li>
)

TabComponent.propTypes = {
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.number.isRequired
}

TabComponent.contextTypes = {
  selectedIndex: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired
}

export default TabComponent