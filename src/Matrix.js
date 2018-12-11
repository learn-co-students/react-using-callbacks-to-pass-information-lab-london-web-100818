import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
  

  constructor() {
    super()
    this.state = {
      color: ""
    } 
  }

  setColor = (color) => {
    this.setState({
      color: color
    })
  }

  getColor = () =>(
     this.state
  )

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} setColor={this.getColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector color={this.setColor}/>
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
