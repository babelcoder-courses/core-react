import React from 'react'
import L from 'react-loadable'

const Loading = () => (
  <div>Loading...</div>
)

export default opts => L({
  loading: Loading,
  ...opts
})
