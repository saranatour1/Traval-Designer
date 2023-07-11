
import { useState } from 'react';
import { useEffect } from 'react';

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