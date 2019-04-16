import { combineReducers } from 'redux';
import todolist from './todolist';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    todolist: todolist,
    visibilityFilter: visibilityFilter
})

export default rootReducer;