import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component {
  render() {
    const { user, text } = this.props.comment

    return (
      <div>
        <h3>{user}</h3>
        <div>{text}</div>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }).isRequired
}

export default Comment
