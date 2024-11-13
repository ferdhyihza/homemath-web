import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="d-flex flex-column justify-content-center min-vh-100 align-items-center">
      <h1>Oops! Something went wrong</h1>
      <p className="fw-bold border rounded py-2 px-3 mt-3 bg-light-subtle">
        {error.status} - {error.statusText || error.message}
      </p>
      <p className="fw-light">{error.data}</p>
      <Link to="/" className="btn btn-dark mt-3">
        <i className="bi bi-arrow-left me-2"></i>
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
