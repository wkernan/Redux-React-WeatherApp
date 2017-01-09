// functional component
import _ from 'lodash';
import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid } from 'recharts';

function average(data) {
	const arr = data.map((data) => data.data);
	return _.round(_.sum(arr)/arr.length);
}

export default (props) => {
	return (
		<div>
			<LineChart height={200} width={250} data={props.data} margin={{top:0, right:0, left:0, bottom:0}} >
				<XAxis dataKey={props.time} />
				<YAxis />
				<CartesianGrid />
				<Line type="monotone" dataKey={props.dataKey}  stroke={props.color} />
			</LineChart>
			<div>{average(props.data)}{props.symbol} {props.units}</div>
		</div>
	)
}