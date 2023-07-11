import { useState } from 'react';
import { useEffect } from 'react';

/**
 * The `useErrors` function is a React hook that manages error messages and their display state.
 * @returns an object with the following properties and methods:
 */
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