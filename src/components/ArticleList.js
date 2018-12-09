import React, { Component } from 'react'
import Article from './Article'
import Accordion from '../decorators/Accordion'

class ArticleList extends Component {
  render () {
    return (
      <ul>
        {this.body}
      </ul>
    )
  }

  get body () {
    return this.props.articles.map((article) =>
      <li key = {article.id}>
        <Article article = {article}
                 isOpen = {this.props.openItemId === article.id}
                 toggleOpen = {this.props.toggleOpenItem}/>
      </li>
    )
  }
}

// export default ArticleList
export default Accordion(ArticleList)
