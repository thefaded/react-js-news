import React from 'react'

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

export default Comment
