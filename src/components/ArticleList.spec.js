import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleListWithAccordion, { ArticleList } from './ArticleList'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
  it('should render article list', () => {
    const container = render(<ArticleList articles={articles} />)

    expect(container.find('.test__article-list--item').length).toEqual(
      articles.length
    )
  })

  it('should open an article on click', () => {
    const container = mount(<ArticleListWithAccordion articles={articles} />)

    container
      .find('.test__article--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__article--body').length).toEqual(1)
  })

  it('should trigger data fetching on mount', (done) => {
    mount(
      <ArticleListWithAccordion
        articles={[]}
        toggleOpenItem={() => {}}
        fetchData={done}
      />
    )
  })
})
