import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
  state = {
    openItemId: null
  }

  render () {
    return <OriginalComponent
            {...this.props}
            openItemId = {this.state.openItemId}
            toggleOpenItem = {this.toggleOpenItem}
           />

    // <OriginalComponent {...this.props} {...this.state}
  }

  toggleOpenItem = (itemId) => {
    this.setState({ openItemId: itemId })
  }
}
