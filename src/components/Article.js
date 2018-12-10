import React, { PureComponent } from 'react'
import CommentList from './CommentList'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.handleBtnClick}>
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
      <section>
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
