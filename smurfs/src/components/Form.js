import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postData } from '../actions';

function Form(props) {
	const [smurf, setSmurf] = useState({ name: '', age: '', height: '' });
	const handleChanges = (e) => {
		setSmurf({ ...smurf, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postData(smurf);
		setSmurf({ name: '', age: '', height: '' });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={smurf.name}
					onChange={handleChanges}
				/>
			</label>
			<label>
				Age:
				<input type="text" name="age" value={smurf.age} onChange={handleChanges} />
			</label>
			<label>
				Height:
				<input
					type="text"
					name="height"
					value={smurf.height}
					onChange={handleChanges}
				/>
			</label>
			<button className="add-button">Add Smurf</button>
		</form>
	);
}

export default connect(null, { postData })(Form);
