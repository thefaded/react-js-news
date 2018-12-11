import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import CommentListWithToggle from '../CommentList'
import './style.css'

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
        <CSSTransition
          transitionName="article"
          transitionAppear
          transitionEnterTimeout={500}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  get body() {
    const { article, isOpen } = this.props
    if (!isOpen) return null

    return (
      <section className="test__article--body">
        {article.text}
        <CommentListWithToggle isOpen={isOpen} comments={article.comments} />
      </section>
    )
  }

  handleBtnClick = () => {
    this.props.toggleOpen(this.props.article.id)
  }
}

export default Article
