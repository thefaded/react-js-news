import React from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

export default Filters
