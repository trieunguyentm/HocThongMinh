// Reducer SaveInfoUser
const initialState = {
    userName: "",
    name: "",
    email: "",
    classStudent: "",
    phone: "",
    date: "",
    school: "",
    gender: "",
}

export default function SaveInfoUserReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_INFO':
            return action.payload;
        case 'RESET_INFO':
            return action.payload;
        default:
            return state;
    }
}