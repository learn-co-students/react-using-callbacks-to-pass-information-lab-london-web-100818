import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
  }

  state = {
    selectedColor: '#fff'
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val}  theSelectedColor={this.theSelectedColor}/>)
    )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
    )



  shouldComponentUpdate(nextProps, nextState) {
    return nextState.selectedColor !== this.state.selectedColor
  }


  theSelectedColor = ( ) =>
  this.state.selectedColor

  render() {
    return (
      <div id="app">
      <ColorSelector selectColor={this.selectColor} color={this.state.selectedColor}/>
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
