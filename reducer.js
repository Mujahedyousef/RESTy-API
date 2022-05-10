const initialState = {
    history: [],
    count: 0,

}

export default function historyReducer(state=initialState, action) {
const {type,payload}=action;
switch(type) {
    case 'ADD_HISTORY':
        const count = state.count + 1;
        const history = [...state.history,payload];
        // return {count:count2,people:people2}
        return {count,history};
    case 'REMOVE_HISTORY':
        const decCount = state.count - 1;
        const historyWithoutName = state.history.filter((history)=> history !== payload);
        return {count:decCount, history: historyWithoutName};
    default:
        return state;
}
}

export const addAction = (name) =>{
    console.log("inside the addAction, name>>  ",name);
    return {
        type: 'ADD_HISTORY',
        payload: name
    }
}
export const removeAction = (name) =>{
    console.log("inside the removeAction, name>>  ",name);
    return {
        type: 'REMOVE_HISTORY',
        payload: name
    }
}