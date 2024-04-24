import React from 'react'
import { useRouteError, useNavigate } from "react-router-dom";
import Button from '../components/Button.jsx'

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <span>Go back</span>
      </Button>
    </div>
  );
}

export default ErrorPage