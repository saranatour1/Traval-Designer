
import { useState } from 'react';
import { useEffect } from 'react';

/**
 * The `useErrors2` function is a custom React hook that manages a list of errors and provides a way to
 * add errors with a delay.
 * @returns The function `useErrors2` returns an object with two properties: `errors` and `addError`.
 */
function useErrors2({getErrors}) {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getErrors(errors);
  }, [errors, getErrors]);

  function removeErrorAfterDelay(index, delay, setError) {
    setTimeout(() => {
      setError((prevErrors) => prevErrors.filter((_, i) => i !== index));
    }, delay);
  }

  function addError(errorMessage) {
    const newErrors = [...errors, errorMessage];
    setErrors(newErrors);

    const index = newErrors.length - 1;
    removeErrorAfterDelay(index, 3000, setErrors);
  }
  return{errors , addError }
}

export default useErrors2;