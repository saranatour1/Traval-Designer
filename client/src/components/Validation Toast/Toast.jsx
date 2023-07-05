import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

function Toast({ error }) {
  const [toggle, setToggle] = useState(false);
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setOpen(!open);
      setMsg(error);
    }
  }, [error]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClearError = () => {
    setOpen(false);
    setMsg("");
  };

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
        {error && open && (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={error}
            action={action} 
          />
        )}
      </div>
    </div>
  );
}

export default Toast;
