/**
 * Created by hanxzi on 17/4/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App  from './components/app'

const render = () => {
    ReactDOM.render( <App/>,document.querySelector("#root"));
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/app', () => {
        render(App)
    });
}