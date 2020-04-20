import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import Form from './Form';
import Smurf from './Smurf';

const App = (props) => {
	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>
			<Form />
			<button className="display-button" onClick={() => props.fetchData()}>
				Click to display Smurfs!
			</button>

			<div>
				{props.smurfs.length > 0 ? (
					props.smurfs.map((smurf) => <Smurf smurf={smurf} key={smurf.id} />)
				) : (
					<div>Add Smurf to the villages!</div>
				)}
			</div>
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

export default connect(mapStateToProps, { fetchData })(App);
