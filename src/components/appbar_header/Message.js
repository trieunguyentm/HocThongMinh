import { Snackbar } from '@mui/material'
import * as React from 'react';
import './styles.scss'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Message = ({ open, onClose, typeMessage, textMessage }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert onClose={onClose} severity={typeMessage}>
                {textMessage}
            </Alert>
        </Snackbar>
    );
};

export default Message;