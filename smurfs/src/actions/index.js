import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';
export const POST_DATA = 'POST_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const fetchData = () => (dispatch) => {
	dispatch({ type: FETCH_DATA });
	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			dispatch({
				type: DATA_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: DATA_ERROR,
				payload: err.message,
			});
		});
};

export const postData = (smurf) => (dispatch) => {
	axios
		.post('http://localhost:3333/smurfs', smurf)
		.then((res) => {
			dispatch({
				type: POST_DATA,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

export const deleteData = (smurfId) => (dispatch) => {
	axios
		.delete(`http://localhost:3333/smurfs/${smurfId}`)
		.then((res) => {
			dispatch({
				type: DELETE_DATA,
				payload: res.data,
			});
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
};
