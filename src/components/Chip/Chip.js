import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import stylesheet from './Chip.module.css'

const colorTypes = ['Red', 'Green', 'Blue', 'Purple'];

export default function Chip ({className, type, positionX, positionY}) {

	const position = {left: positionX, top: positionY};

	const classes = classNames(stylesheet.Base, stylesheet[type], className);

	return <div className={classes} style={position}/>
}

Chip.propTypes = {
	positionX: propTypes.number.isRequired,
	positionY: propTypes.number.isRequired,
	type: propTypes.oneOf(colorTypes)
};

Chip.defaultProps = {
	positionX: 100,
	positionY: 100,
	type: 'Red'
};