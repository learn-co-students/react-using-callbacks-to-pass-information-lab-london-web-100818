import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.color !== this.state.color
  }

  handleClick = () =>
    this.setState({color: this.props.theSelectedColor()})

  render() {
    console.log("rendering")
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }

}
