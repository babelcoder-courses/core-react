import React, { PropTypes } from 'react'
import classNames from 'classnames'

const tabLinkClasses = (index, activeTab) => {
  return classNames('nav-link', { active: index === activeTab })
}

const TabsComponent = ({ tabs, activeTab, onTabChange }) => (
  <div>
    <ul className='nav nav-tabs'>
      {
        tabs.map(
          ({ title }, index) => <li key={index} className='nav-item'>
            <a 
              href='#'
              className={ tabLinkClasses(index, activeTab) }
              onClick={ () => onTabChange(index) }>
              { title }
            </a>
          </li>
        )
      }
    </ul>
    <div className='tab-content'>
      <div className='tab-pane active'>{ tabs[activeTab].content }</div>
    </div> 
  </div>
)

TabsComponent.defaultProps = {
  activeTab: 0
}

TabsComponent.propTypes = {
  activeTab: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ),
  onTabChange: PropTypes.func.isRequired
}

export default TabsComponent