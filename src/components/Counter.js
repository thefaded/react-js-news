import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { increment } from '../ac'

class Counter extends React.Component {
  static propTypes = {
    number: PropTypes.number,
    increment: PropTypes.func
  }

  // state = {
  // counter: store.getState().counter
  // }

  render() {
    const { number, handleIncrement } = this.props

    return (
      <div>
        <h3>{number}</h3>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => ({
  number: storeState.counter
})

const mapDispatchToProps = {
  handleIncrement: increment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
