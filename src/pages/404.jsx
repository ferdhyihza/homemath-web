import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="d-flex flex-column justify-content-center min-vh-100 align-items-center">
      <h1>Oops! Something went wrong</h1>
      <p className="fw-bold border rounded py-2 px-3 mt-3 bg-light-subtle">
        {error.status} - {error.statusText || error.message}
      </p>
      <p className="fw-light">{error.data}</p>
    </div>
  );
};

export default ErrorPage;
