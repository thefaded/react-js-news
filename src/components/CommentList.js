import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import toggleOpen from '../decorators/ToggleOpen'

export class CommentList extends React.Component {
  static propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  static defaultProps = {
    comments: []
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const buttonLabel = isOpen ? 'Hide Comments' : 'Show Comments'

    return (
      <div>
        <button onClick={toggleOpen} className="test__comments-list--btn">
          {buttonLabel}
        </button>
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
            <li key={comment.id} className="test__comments-list--item">
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No comments!</h3>
      )

    return <div>{body}</div>
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

const CommentListWithToggle = toggleOpen(CommentList)

export default CommentListWithToggle
