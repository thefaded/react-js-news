import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }),
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  }

  render() {
    const { article, isOpen } = this.props

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.handleBtnClick} className="test__article--btn">
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.body}
      </div>
    )
  }

  get body() {
    const { article, isOpen } = this.props
    if (!isOpen) return null

    return (
      <section className="test__article--body">
        {article.text}
        <CommentList isOpen={isOpen} comments={article.comments} />
      </section>
    )
  }

  handleBtnClick = () => {
    this.props.toggleOpen(this.props.article.id)
  }
}

export default Article
