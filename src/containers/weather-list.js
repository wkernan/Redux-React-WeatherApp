import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map((weather) => {return {data: weather.main.temp, date: getDate(weather.dt_txt)}});
		const pressures = cityData.list.map((weather) => {return {data: weather.main.pressure}});
		const humidities = cityData.list.map((weather) => {return {data: weather.main.humidity}});
		const { lon, lat } = cityData.city.coord;

		return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} dataKey="data" time="date" color="#8884d8" units="F" symbol="&deg;" /></td>
				<td><Chart data={pressures} dataKey="data" color="#82ca9d" units="hPa" /></td>
				<td><Chart data={humidities} dataKey="data" color="#ffc658" units="%" /></td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead className="thead-inverse">
					<tr>
						<th>City</th>
						<th>Temperature (&deg;F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function getDate(date) {
	const d = new Date(date);
	const day = d.getDay();
	const weekday = ['S','M','T','W','Th','F','Sa'];
	return weekday[day];
}

function mapStateToProps({ weather }) {
	// like saying const weather = state.weather
	return { weather }; // like return { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);