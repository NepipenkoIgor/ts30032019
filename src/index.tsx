import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import Header from './containers/header';
import Content from './containers/content';

class App extends React.Component {
    public render(): JSX.Element {
        return <Provider store={store}>
            <React.Fragment>
                <Header />
                <Content/>
            </React.Fragment>
        </Provider>;
    }
}

const el: HTMLDivElement = document.querySelector('#root') as HTMLDivElement;
ReactDOM.render(<App/>, el);