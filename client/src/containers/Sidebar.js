import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SidebarContainer extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    fetch('/categories')
      .then(res => res.json())
      .then(({ categories }) => this.setState({ categories }))
  }

  render() {
    return (
      <div className='col-5'>
        <nav className='list-group'>
          {
            this.state.categories.map(({ id, title }) =>
              <NavLink
                key={id}
                to={`/categories/${id}/articles`}
                className='list-group-item'
                activeClassName='active'>{title}</NavLink>
            )
          }
        </nav>
      </div>
    )
  }
}

export default SidebarContainer
