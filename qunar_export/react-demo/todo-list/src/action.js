export const ADD_LIST_TASK = 'ADD_LIST_TASK';
export const Change_Style_List = 'Change_Style_List';
export const Remove_Task_List = 'Remove_Task_List';

let id = 3;
export const addTaskList = (text, completed) => {
    return {
        type: ADD_LIST_TASK,
        task: {id: id++, text, completed}
    }
}
export const changeStyleList = (id) => {
    return {
        type: Change_Style_List,
        id
    }
}
export const removeTaskList = (id) => {
    return {
        type: Remove_Task_List,
        id
    }
}