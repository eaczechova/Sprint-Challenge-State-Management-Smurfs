import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData, postData } from '../actions';

const App = (props) => {
	const [smurf, setSmurf] = useState({ name: '', age: null, height: '' });
	const handleChanges = (e) => {
		setSmurf({ ...smurf, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postData(smurf);
		setSmurf({ name: '', age: null, height: '' });
	};

	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>

			<button onClick={() => props.fetchData()}>Click to display Smurfs!</button>
			<div>
				{props.smurfs.map((s) => (
					<p>
						{s.name} who is {s.age} and {s.height} tall.
					</p>
				))}
			</div>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={props.smurfs.name}
						onChange={handleChanges}
					/>
				</label>
				<label>
					Age:
					<input
						type="number"
						name="age"
						value={props.smurfs.age}
						onChange={handleChanges}
					/>
				</label>
				<label>
					Height:
					<input
						type="text"
						name="height"
						value={props.smurfs.height}
						onChange={handleChanges}
					/>
				</label>
				<button>Add Smurf</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isLoading: state.isLoading,
		error: state.error,
	};
};
const mapDispatch = { fetchData, postData };

export default connect(mapStateToProps, mapDispatch)(App);
