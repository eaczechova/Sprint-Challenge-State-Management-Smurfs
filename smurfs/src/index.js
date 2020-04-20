import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchReducer } from './reducers';

const store = createStore(fetchReducer, applyMiddleware(thunk));
const smurfsLength = store.getState().smurfs.length;
ReactDOM.render(
	<Provider store={store}>
		<App smurfsLength={smurfsLength} />
	</Provider>,
	document.getElementById('root')
);
