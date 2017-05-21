import React from 'react'
import PropTypes from 'prop-types'
import { withState, withHandlers, setPropTypes, compose } from 'recompose'

const EditArticle = ({
  id,
  formValues: { title, content },
  onFieldChange,
  onSubmit
}) => (
  <form>
    <label htmlFor='title'>Title</label>
    <input
      type='text'
      name='title'
      placeholder='Enter title'
      value={title}
      onChange={onFieldChange} />
    <label htmlFor='content'>Content</label>
    <input
      type='text'
      name='content'
      placeholder='Enter content'
      value={content}
      onChange={onFieldChange} />
    <button
      type='submit'
      onClick={onSubmit}>Edit</button>
  </form>
)

export default compose(
  setPropTypes({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  }),
  withState(
    'formValues',
    'setFormValues',
    ({ title, content }) => ({ title, content })
  ),
  withHandlers({
    onSubmit: ({ id, onSubmit, formValues }) => event => {
      event.preventDefault()

      onSubmit(id, formValues)
    },
    onFieldChange: ({ formValues, setFormValues }) => event => {
      const { name, value } = event.target

      setFormValues({ ...formValues, [name]: value })
    }
  })
)(EditArticle)
