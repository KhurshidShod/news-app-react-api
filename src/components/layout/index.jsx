import React, { Component } from 'react'
import Header from '../header'

export class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
            {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}

export default Layout