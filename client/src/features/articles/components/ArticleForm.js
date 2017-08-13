import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import Button from 'Features/ui/components/Button'
import styles from './ArticleForm.scss'

const renderField = ({
  input,
  label,
  type,
  element,
  rows,
  meta: { touched, error }
}) => (
  <div className={styles.group}>
    <label>{label}</label>
    {
      element === 'input' ?
        <input {...input} type={type} placeholder={label} /> :
        <textarea {...input} rows={rows} placeholder={label} />
    }
    {
      touched && error && <div className={styles.error}>{error}</div>
    }
  </div>
)

const ArticleForm = ({ header, handleSubmit }) => (
  <form>
    <h2 className={styles.title}>{header}</h2>
    <Field
      component={renderField}
      element='input'
      type='text'
      name='title'
      label='Title' />
    <Field
      component={renderField}
      element='textarea'
      rows={3}
      name='excerpt'
      label='Excerpt' />
    <Field
      component={renderField}
      element='textarea'
      rows={5}
      name='content'
      label='Content' />
    <div className={styles.button}>
      <Button type='submit' onClick={handleSubmit}>{header}</Button>
    </div>
  </form>
)

ArticleForm.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

function validate(values) {
  let errors = {}

  if(!values.title) errors.title = 'Required.'
  if(!values.excerpt) errors.excerpt = 'Required.'
  if(!values.content) errors.content = 'Required.'

  return errors
}

export default reduxForm({
  form: 'article',
  validate
})(ArticleForm)
