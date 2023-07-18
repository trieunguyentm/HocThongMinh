// Reducer SaveInforUser
const initialState = {
    userName: "",
    name: "",
    email: "",
    classStudent: "",
    phone: ""
}

export default function SaveInforUserReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_INFOR':
            return action.payload;
        case 'RESET_INFOR':
            return action.payload;
        default:
            return state;
    }
}