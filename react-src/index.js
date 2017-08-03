import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import { Row } from 'react-bootstrap';

import reducers from "./reducers";
import App from './components/App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const RenderApp = ()  => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<App />
				</div>
			</BrowserRouter>
		</Provider>
	);
};

ReactDOM.render(<RenderApp />, document.getElementById('root'));

export default store; 