import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import useErrors from '../../hooks/useErrors';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';


function Toast({ error }) {
  const { msg, open, handleClearError, handleClose } = useErrors({ error });
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClearError}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <AiOutlineClose />
      </IconButton>
    </>
  );

  return (
    <div>
      <div
        className="max-w-xs bg-gray-500 text-sm text-white rounded-md shadow-lg dark:bg-gray-700 mb-3 mx-auto"
        role="alert"
      >
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={msg}
          action={action}
        />
      </div>
    </div>
  );
}

export default Toast;
