import React from 'react'
import PropTypes from 'prop-types'

const connect = (mapStateToProps, mapDispatchToProps) => Component => class extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  }

  state = {
    subscription: null
  }

  componentDidMount() {
    const subscription = this.context.store.subscribe(
      () => this.forceUpdate()
    )

    this.setState({ subscription })
  }

  componentWillUnmount() {
    this.state.subscription()
  }

  render() {
    const { store } = this.context
    let props = {
      ...mapStateToProps(store.getState(), this.props)
    }

    if(mapDispatchToProps) {
      props = {
        ...props,
        ...mapDispatchToProps(store.dispatch, this.props)
      }
    }

    return <Component {...this.props} {...props} />
  }
}

export default connect
