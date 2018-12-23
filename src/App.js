import React, { Component } from 'react'
import ArticleListWithAccordion from './components/ArticleList'
import UserForm from './components/UserForm'
import Counter from './components/Counter'
import Filters from './components/filters'

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Counter />
        <Filters articles={[]} />
        <ArticleListWithAccordion />
      </div>
    )
  }
}

export default App
