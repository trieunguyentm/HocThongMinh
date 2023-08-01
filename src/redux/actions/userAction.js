// Action Creator
export function ResetInfoUserAction() {
    return {
        type: 'RESET_INFO',
        payload: {
            userName: "",
            name: "",
            email: "",
            classStudent: "",
            phone: "",
            date: "",
            school: "",
            gender: ""
        }
    }
}

// Action Creator
export function SaveInfoUserAction(info) {
    return {
        type: 'SAVE_INFO',
        payload: info
    }
}