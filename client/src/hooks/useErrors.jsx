import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function useErrors({error}) {
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

  return {msg, open , handleClearError ,handleClick ,handleClose};
}

export default useErrors;