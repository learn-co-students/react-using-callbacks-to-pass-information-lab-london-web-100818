import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: ''
    }
  }

  selectColor = (e) => {
    this.setState({
      color: e.target.style.backgroundColor
    })
  }

  handleCellclicked =(e) => {
    e.target.style.backgroundColor = this.state.color;
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => 
      {
        return (
          <div key={idx} className="row" onClick={this.handleCellclicked}>
            {this.genRow(rowVals)}
          </div>
        )
      }
    )
  )

  render() {
    return (
      <div id="app">
        <ColorSelector selectColor={this.selectColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: chromeBoi
}
