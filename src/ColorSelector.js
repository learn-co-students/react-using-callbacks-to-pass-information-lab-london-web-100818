import React, { Component } from 'react';
import Matrix from './Matrix.js'
export default class ColorSelector extends Component {
  
  handleClick = (col) => {
    Matrix.colorChange(col)
  }
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const cb = () => this.props.colorChange(str)
      return <div key={idx} className="color-swatch" onClick={cb} style={{backgroundColor: str}}/>
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
