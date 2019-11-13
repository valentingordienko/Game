import React, {useState} from 'react';
import classNames from 'classnames';
import propTypes from "prop-types";
import stylesheet from './cell.module.css';

const types = ['road', 'finish', 'prison', 'house', 'base'];

export default function Cell({className, type, name, onClick}) {

	const [clicked, setClicked] = useState(false);

	function handleClick(event) {

		onClick(event);
	}

	const classes = classNames(stylesheet.main, className, {
		[stylesheet.road]: type === types[0],
		[stylesheet.finish]: type === types[1],
		[stylesheet.prison]: type === types[2],
		[stylesheet.house]: type === types[3],
		[stylesheet.base]: type === types[4],
		[stylesheet.clicked]: clicked,

	});

	return (
		<div className={classes} onClick={handleClick} style={{gridArea: name}}/>
	)
}

Cell.propTypes = {
	instance: propTypes.object.isRequired,
	types: propTypes.oneOf(types).isRequired,
	name: propTypes.string.isRequired,
	onClick: propTypes.func
};

Cell.defaultProps = {
	types: types[0],
	name: 'empty_name_property',
	onClick: () => {console.log('empty_onClick_property')}
};
