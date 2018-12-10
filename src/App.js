import React, { Component } from 'react'
import ArticleList from './components/ArticleList'
import UserForm from './components/UserForm'
import Filters from './components/filters'
import articles from './fixtures'

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
