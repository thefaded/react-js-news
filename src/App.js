import React, { Component } from 'react'
import ArticleList from './components/ArticleList'
import articles from './fixtures'

class App extends Component {
  render () {
    return (
      <div>
        <ArticleList articles = {articles}/>
      </div>
    )
  }
}

export default App
