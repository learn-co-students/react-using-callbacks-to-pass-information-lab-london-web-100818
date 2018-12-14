import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch"  onClick={() => this.props.setColor(str)} style={{backgroundColor: str}} />
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {

          this.makeColorSwatches()

        }
      </div>
    )
  }

}

// #### `ColorSelector`
//
// - update `makeColorSwatches` to provide the `<div>`s it is rendering with _some
// way_ to fire off that method we wrote for Matrix (hint: consider using an event
// listener and controlling the argument when an event handler is fired)
