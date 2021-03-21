<<<<<<< HEAD
import {ValidationError} from 'yup';

interface Errors{
    [key: string] : string;
}

export default function getValidadetionErros(err: ValidationError): Errors {
const validationError: Errors = {};
err.inner.forEach((error) =>{
    validationError[error.path] = error.message;
});

    return validationError;
}
=======
import { ValidationError } from "yup";

interface Errors {
  [key: string]: string;
}

export default function getValidadetionErros(err: ValidationError): Errors {
  const validationError: Errors = {};
  
  err.inner.forEach((error: any) => {
    validationError[error.path] = error.message;
  });

  return validationError;
}
>>>>>>> 9baa6d89c73b6c2dd0c01c222e9df59b80dcd6f5
