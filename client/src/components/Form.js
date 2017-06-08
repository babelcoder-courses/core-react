import React, { PureComponent } from 'react'

class Form extends PureComponent {
  static defaultProps = {
    value: ''
  }

  state = {
    value: this.props.value
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.value)
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Form
