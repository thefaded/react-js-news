import React from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends React.Component {
  static propTypes = {}

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
