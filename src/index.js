import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './stores';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// router
import RootRouter from 'routers';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(ReduxThunk, logger)),
);

const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<RootRouter />
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);

reportWebVitals();
