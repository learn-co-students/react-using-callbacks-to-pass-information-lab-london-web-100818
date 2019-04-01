import React, { Component, Fragment } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={this.props.selectColor}/>
    })
  )

  render() {
    return (
      <Fragment>
      <p>Current Color</p>
      <div key={'currentColor'} className="color-swatch" style={{backgroundColor: this.props.color}}/>
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
      </Fragment>
    )
  }

}
