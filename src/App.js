import React, { Component } from 'react'
import ArticleListWithAccordion from './components/ArticleList'
import UserForm from './components/UserForm'
import Filters from './components/filters'
import articles from './fixtures'

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleListWithAccordion articles={articles} />
      </div>
    )
  }
}

export default App
