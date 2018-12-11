import React, { Component } from 'react'
import Article from './Article'
import Accordion from '../decorators/Accordion'

export class ArticleList extends Component {
  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    return this.props.articles.map((article) => (
      <li key={article.id} className="test__article-list--item">
        <Article
          article={article}
          isOpen={this.props.openItemId === article.id}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

const ArticleListWithAccordion = Accordion(ArticleList)

export default ArticleListWithAccordion
