import React from 'react'
import { PropTypes } from 'prop-types';

const boxStyle = lines => {
  return {
    position: 'relative',
    overflow: 'hidden',
    lineHeight: '1.2em',
    maxHeight: `${lines*1.2}em`,
    textAlign: 'justify'
  }
}

const shadowStyle = {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  boxShadow: 'inset 0 -16px 16px 0 rgba(255, 255, 255, 0.8)'
}

const BoxWithInsetShadow = props => (
  <div style={boxStyle(props.lines)} className={props.cssClass}>
    {props.text}
    <div style={shadowStyle} />
  </div>
)

BoxWithInsetShadow.propTypes = {
  text: PropTypes.string.isRequired,
  lines: PropTypes.number.isRequired,
  cssClass: PropTypes.string
}

export default BoxWithInsetShadow;
