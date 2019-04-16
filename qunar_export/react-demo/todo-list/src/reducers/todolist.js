import { ADD_LIST_TASK } from '../action';
import { Change_Style_List } from '../action';
import { Remove_Task_List } from '../action';
const initialState = [
    {
        id: 0,
        completed: false,
        text: '吃饭'
    },
    {
        id: 1,
        completed: false,
        text: '睡觉'
    },
    {
        id: 2,
        completed: false,
        text: '玩'
    }
];

export default function(state=initialState, action) {
    switch(action.type) {
        case ADD_LIST_TASK: {
            state.push(action.task);
            return [...state];
        }
        case Change_Style_List: {
            const data = state.map((todo) => {
                if(action.id === todo.id) {
                    return {...todo, completed: !todo.completed}
                }else {
                    return todo;
                }
            })
            return [...data];
        }
        case Remove_Task_List: {
            state.splice(action.id, 1);
            return [...state];
        }
        default: return state;
    }

}