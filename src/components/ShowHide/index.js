import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  renderFirstName = () => {
    const {firstName} = this.state
    if (firstName === true) {
      return (
        <div className="name-container">
          <p className="name">Joe</p>
        </div>
      )
    }
    return null
  }

  renderLastName = () => {
    const {lastName} = this.state
    if (lastName === true) {
      return (
        <div className="name-container">
          <p className="name">Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div>
            <button type="button" className="button" onClick={this.onFirstName}>
              Show/Hide FirstName
            </button>
            {this.renderFirstName()}
          </div>
          <div>
            <button type="button" className="button" onClick={this.onLastName}>
              Show/Hide LastName
            </button>
            {this.renderLastName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
