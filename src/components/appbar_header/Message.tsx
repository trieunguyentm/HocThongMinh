import React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface MessageProps {
  open: boolean;
  onClose?: any;
  typeMessage: any;
  textMessage: string;
}

const Message: React.FC<MessageProps> = ({ open, onClose, typeMessage, textMessage }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
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
