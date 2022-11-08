import comments from './comments';
import blog from './blog';
import { combineReducers } from 'redux';

export default combineReducers({
    comments,
    blog
})