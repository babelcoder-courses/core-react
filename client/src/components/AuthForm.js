import React from 'react'
import PropTypes from 'prop-types'
import {
  pure,
  withState,
  withHandlers,
  setPropTypes,
  compose
} from 'recompose'

const AuthForm = ({
  formName,
  onSubmit,
  onFieldChange,
  setFormValues
}) => (
  <form>
    <h2 className='text-center'>{formName} Form</h2>
    <hr />
    <div className='form-group'>
      <label htmlFor='email'>Email address</label>
      <input
        type='email'
        className='form-control'
        id='email'
        name='email'
        placeholder='Enter email'
        onChange={onFieldChange} />
    </div>
    <div className='form-group'>
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        className='form-control'
        id='password'
        name='password'
        placeholder='Enter password'
        onChange={onFieldChange} />
    </div>
    <button
      type='submit'
      className='btn btn-primary'
      onClick={onSubmit}>{formName}</button>
  </form>
)

export default compose(
  withState('formValues', 'setFormValues', { email: '', password: '' }),
  withHandlers({
    onSubmit: ({ onSubmit, formValues }) => event => {
      event.preventDefault()

      onSubmit(formValues)
    },
    onFieldChange: ({ setFormValues, formValues }) => event => {
      const { name, value } = event.target

      setFormValues({ ...formValues, [name]: value })
    }
  }),
  setPropTypes({
    formName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  }),
  pure
)(AuthForm)
