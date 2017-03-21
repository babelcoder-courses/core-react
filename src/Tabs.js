import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class TabsComponent extends Component {
  static defaultProps = {
    activeTab: 0
  }

  static propTypes = {
    activeTab: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element)
  }

  state = {
    activeTab: this.props.activeTab
  }

  tabLinkClasses = (index) => {
    return classNames('nav-link', { active: index === this.state.activeTab })
  }

  setActiveTab = (index) => {
    this.setState({ activeTab: index })
  }

  render() {
    return (
      <div>
        <ul className='nav nav-tabs'>
          {
            this.props.children.map(
              (pane, index) => <li key={index} className='nav-item'>
                <a 
                  href="#" 
                  className={ this.tabLinkClasses(index) }
                  onClick={ () => this.setActiveTab(index) }>
                  { pane.props.title }
                </a>
              </li>
            )
          }
        </ul>
        <div className='tab-content'>
          { this.props.children[this.state.activeTab] }
        </div>
      </div>
    )
  }
}