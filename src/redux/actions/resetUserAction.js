// Action Creator
export default function ResetInforUserAction() {
    return {
        type: 'RESET_INFOR',
        payload: {
            userName: "",
            name: "",
            email: "",
            classStudent: "",
            phone: ""
        }
    }
}