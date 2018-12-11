import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentListWithToggle, { CommentList } from './CommentList'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render comment list', () => {
    const comments = articles[0].comments
    const container = render(<CommentList comments={comments} isOpen={true} />)

    expect(container.find('.test__comments-list--item').length).toEqual(
      comments.length
    )
  })

  it('should show comments on click', () => {
    const articleIndex = 0
    const comments = articles[articleIndex].comments
    const container = mount(<CommentListWithToggle comments={comments} />)

    container
      .find('.test__comments-list--btn')
      .at(articleIndex)
      .simulate('click')

    expect(container.find('.test__comments-list--item').length).toEqual(
      comments.length
    )
  })

  it('should trigger data fetching on mount', (done) => {
    const articleIndex = 0
    const comments = articles[articleIndex].comments

    mount(<CommentListWithToggle comments={comments} fetchData={done} />)
  })
})
