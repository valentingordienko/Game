import React, {useState} from 'react';
import classNames from 'classnames';
import Cell from '../Cell';
import Chip from "../Chip";
import stylesheet from './GameBoard.module.css';

const CellMap = [
	{type: 'road', name: 'r01'},
	{type: 'road', name: 'r02'},
	{type: 'road', name: 'r03'},
	{type: 'road', name: 'r04'},
	{type: 'road', name: 'r05'},
	{type: 'road', name: 'r06'},
	{type: 'road', name: 'r07'},
	{type: 'road', name: 'r08'},
	{type: 'road', name: 'r09'},
	{type: 'road', name: 'r10'},
	{type: 'road', name: 'r11'},
	{type: 'road', name: 'r12'},
	{type: 'road', name: 'r13'},
	{type: 'road', name: 'r14'},
	{type: 'road', name: 'r15'},
	{type: 'road', name: 'r16'},
	{type: 'road', name: 'r17'},
	{type: 'road', name: 'r18'},
	{type: 'road', name: 'r19'},
	{type: 'road', name: 'r20'},
	{type: 'road', name: 'r21'},
	{type: 'road', name: 'r22'},
	{type: 'road', name: 'r23'},
	{type: 'road', name: 'r24'},
	{type: 'road', name: 'r25'},
	{type: 'road', name: 'r26'},
	{type: 'road', name: 'r27'},
	{type: 'road', name: 'r28'},
	{type: 'road', name: 'r29'},
	{type: 'road', name: 'r30'},
	{type: 'road', name: 'r31'},
	{type: 'road', name: 'r32'},
	{type: 'road', name: 'r33'},
	{type: 'road', name: 'r34'},
	{type: 'road', name: 'r35'},
	{type: 'road', name: 'r36'},
	{type: 'road', name: 'r37'},
	{type: 'road', name: 'r38'},
	{type: 'road', name: 'r39'},
	{type: 'road', name: 'r40'},
	{type: 'road', name: 'r41'},
	{type: 'road', name: 'r42'},
	{type: 'road', name: 'r43'},
	{type: 'road', name: 'r44'},
	{type: 'road', name: 'r45'},
	{type: 'road', name: 'r46'},
	{type: 'road', name: 'r47'},
	{type: 'road', name: 'r48'},
	{type: 'road', name: 'r49'},
	{type: 'road', name: 'r50'},
	{type: 'road', name: 'r51'},
	{type: 'road', name: 'r52'},
	{type: 'road', name: 'r53'},
	{type: 'road', name: 'r54'},
	{type: 'road', name: 'r55'},
	{type: 'road', name: 'r56'},
	{type: 'prison', name: 'p10'},
	{type: 'prison', name: 'p20'},
	{type: 'prison', name: 'p30'},
	{type: 'prison', name: 'p40'},
	{type: 'house', name: 'h01'},
	{type: 'house', name: 'h02'},
	{type: 'house', name: 'h03'},
	{type: 'house', name: 'h04'},
	{type: 'house', name: 'h05'},
	{type: 'house', name: 'h06'},
	{type: 'house', name: 'h07'},
	{type: 'house', name: 'h08'},
	{type: 'finish', name: 'f11'},
	{type: 'finish', name: 'f12'},
	{type: 'finish', name: 'f13'},
	{type: 'finish', name: 'f14'},
	{type: 'finish', name: 'f15'},
	{type: 'finish', name: 'f21'},
	{type: 'finish', name: 'f22'},
	{type: 'finish', name: 'f23'},
	{type: 'finish', name: 'f24'},
	{type: 'finish', name: 'f25'},
	{type: 'finish', name: 'f31'},
	{type: 'finish', name: 'f32'},
	{type: 'finish', name: 'f33'},
	{type: 'finish', name: 'f34'},
	{type: 'finish', name: 'f35'},
	{type: 'finish', name: 'f41'},
	{type: 'finish', name: 'f42'},
	{type: 'finish', name: 'f43'},
	{type: 'finish', name: 'f44'},
	{type: 'finish', name: 'f45'},
	{type: 'base', name: 'b11'},
	{type: 'base', name: 'b12'},
	{type: 'base', name: 'b13'},
	{type: 'base', name: 'b14'},
	{type: 'base', name: 'b15'},
	{type: 'base', name: 'b21'},
	{type: 'base', name: 'b22'},
	{type: 'base', name: 'b23'},
	{type: 'base', name: 'b24'},
	{type: 'base', name: 'b25'},
	{type: 'base', name: 'b31'},
	{type: 'base', name: 'b32'},
	{type: 'base', name: 'b33'},
	{type: 'base', name: 'b34'},
	{type: 'base', name: 'b35'},
	{type: 'base', name: 'b41'},
	{type: 'base', name: 'b42'},
	{type: 'base', name: 'b43'},
	{type: 'base', name: 'b44'},
	{type: 'base', name: 'b45'},
];

export default function GameBoard({className}) {

	const [chipPosition, setChipPosition] = useState({positionX: 100, positionY: 100});

	function handleCellClick(event){
		const {left, top} = event.target.getBoundingClientRect();
		setChipPosition({positionX: left + 5, positionY: top + 5});
	}

	const classes = classNames(stylesheet.main, className);

	return (
		<div className={classes}>
			<Chip {...chipPosition}/>
			{CellMap.map((item)=> {
				return <Cell key={item.name} instance={item} type={item.type} name={item.name} onClick={handleCellClick}/>
			})}
		</div>
	)
}

GameBoard.propTypes = {};

GameBoard.defaultProps = {};