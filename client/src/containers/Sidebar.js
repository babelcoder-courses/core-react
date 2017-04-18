import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  withState,
  lifecycle,
  onlyUpdateForKeys,
  compose
} from 'recompose'

const SidebarContainer = ({
  categories
}) => (
  <div className='col-5'>
    <nav className='list-group'>
      {
        categories.map(({ id, title }) =>
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

export default compose(
  withState('categories', 'setCategories', []),
  lifecycle({
    componentDidMount() {
      fetch('/categories')
        .then(res => res.json())
        .then(({ categories }) => this.props.setCategories(categories))
    }
  }),
  onlyUpdateForKeys(['categories'])
)(SidebarContainer)
