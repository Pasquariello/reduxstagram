import {createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux'; 
import { browserHistory} from 'react-router'; 

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState); 

export const history = syncHistoryWithStore(browserHistory, store); //handles where we have gone its accessible to other files

export default store;

//to beable to export history and store 