import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { deleteData } from '../actions';

function Smurf(props) {
	const handleDelete = (smurfId) => {
		props.deleteData(smurfId);
		console.log(smurfId);
	};

	return (
		<div className="smurf-card">
			<p>
				{props.smurf.name} is {props.smurf.age} years old and is{' '}
				{props.smurf.height} tall.
			</p>
			<button onClick={() => handleDelete(props.smurf.id)}>Delete</button>
		</div>
	);
}
export default connect(null, { deleteData })(Smurf);
