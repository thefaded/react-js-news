import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './article'
import Accordion from '../decorators/Accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

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
