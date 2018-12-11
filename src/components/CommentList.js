import React from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/ToggleOpen'

class CommentList extends React.Component {
  static defaultProps = {
    comments: []
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const buttonLabel = isOpen ? 'Hide Comments' : 'Show Comments'

    return (
      <div>
        <button onClick={toggleOpen}>{buttonLabel}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body =
      comments && comments.length ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No comments!</h3>
      )

    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
