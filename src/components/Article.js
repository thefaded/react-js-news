import React, { PureComponent } from 'react'

class Article extends PureComponent {
  render () {
    const { article, isOpen } = this.props

    return (
      <div>
        <div>
          <h3>{article.title}</h3>
          <button onClick = {this.handleBtnClick.bind(this)}>{isOpen ? 'Close' : 'Open'}</button>
        </div>
        {isOpen && <section>{article.text}</section>}
      </div>
    )
  }

  handleBtnClick () {
    this.props.toggleOpen(this.props.article.id)
  }
}

export default Article
