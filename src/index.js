import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import appSyncConfig from "./aws-exports";
import {ApolloProvider} from "react-apollo";
import AWSAppSyncClient from "aws-appsync";
import {Rehydrated} from "aws-appsync-react";
import './index.css';
import App from './components/App';

const client = new AWSAppSyncClient({
    url: appSyncConfig.ApiUrl,
    region: appSyncConfig.Region,
    auth: {
        type: appSyncConfig.AuthMode,
        apiKey: appSyncConfig.ApiKey,
    },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Rehydrated>
            <Router>
                <Route path="/" component={App}/>
            </Router>
        </Rehydrated>
    </ApolloProvider>,
    document.getElementById('root'));


