import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData, addSmurf } from '../actions';

const App = (props) => {
	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>
			<div>Welcome to your state management version of Smurfs!</div>
			<div>Start inside of your `src/index.js` file!</div>
			<div>Have fun!</div>
			<button onClick={() => props.fetchData()}>Click</button>
			<div>
				{props.smurfs.map((s) => (
					<p>{s.name}</p>
				))}
			</div>
			<form onSubmit={props.addSmurf}>
				<label>
					{' '}
					Name:
					<input
						type="text"
						name="name"
						value={props.smurf.name}
						onChange={props.handleChanges}
					/>
				</label>
				<label>
					{' '}
					Age:
					<input
						type="number"
						name="age"
						value={props.smurf.age}
						onChange={props.handleChanges}
					/>
				</label>
				<label>
					{' '}
					Height:
					<input
						type="text"
						name="height"
						value={props.smurf.height}
						onChange={props.handleChanges}
					/>
				</label>
				<button>Send</button>
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

export default connect(mapStateToProps, { fetchData, addSmurf })(App);
