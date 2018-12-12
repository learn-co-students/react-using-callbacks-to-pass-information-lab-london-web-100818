import React, { Component } from 'react';
import Matrix from './Matrix';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    const col = this.props.currentCol()
    this.setState({
      color: col
    })
  }
  
  render() {
    return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
