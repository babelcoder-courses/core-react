import React from 'react'
import PropTypes from 'prop-types'
import { Prompt } from 'react-router-dom'
import {
  setPropTypes,
  withState,
  withHandlers,
  lifecycle,
  pure,
  compose
} from 'recompose'

const ArticleForm = ({
  isDirty,
  formType,
  onFieldChange,
  formValues: { title, content },
  onSubmit
}) => (
  <form>
    <Prompt
      when={isDirty}
      message='Are you sure you want to leave this page?'
    />
    <h2 className='text-center'>{formType} Article Form</h2>
    <hr />
    <div className='form-group'>
      <label htmlFor='title'>Title</label>
      <input
        type='text'
        className='form-control'
        id='title'
        name='title'
        placeholder='Enter title'
        value={title}
        onChange={onFieldChange} />
    </div>
    <div className='form-group'>
      <label htmlFor='content'>Content</label>
      <textarea
        rows={5}
        className='form-control'
        id='content'
        name='content'
        placeholder='Enter content'
        value={content}
        onChange={onFieldChange} />
    </div>
    <button
      type='submit'
      className='btn btn-primary'
      onClick={onSubmit}>{formType}</button>
  </form>
)

export default compose(
  setPropTypes({
    formType: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  }),
  withState('formValues', 'setFormValues', { title: '', content: '' }),
  withState('isDirty', 'setDirty', false),
  withHandlers({
    onSubmit: ({ onSubmit, formValues, setDirty }) => event => {
      event.preventDefault()

      setDirty(false)
      onSubmit(formValues)
    },

    onFieldChange: ({
      isDirty, setFormValues, formValues, setDirty
    }) => ({ target: { name, value } }) => {
      setFormValues({ ...formValues, [name]: value })
      setDirty(true)
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { title, content, setFormValues } = this.props

      if(prevProps.title === title && prevProps.content === content) return

      setFormValues({ title, content })
    }
  }),
  pure
)(ArticleForm)
