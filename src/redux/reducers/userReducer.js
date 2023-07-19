// Reducer SaveInforUser
const initialState = {
    userName: "trieunguyen2411",
    name: "Triệu Nguyễn",
    email: "trieunguyen241102@gmail.com",
    classStudent: "Lớp 12",
    phone: "0838241102"
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