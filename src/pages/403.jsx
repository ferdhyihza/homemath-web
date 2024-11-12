import { Link } from 'react-router-dom';

const AccessDenied = () => {
  return (
    <div className="d-flex flex-column justify-content-center min-vh-100 align-items-center">
      <h1>Oops! Forbidden</h1>
      <p className="fw-bold border rounded py-2 px-3 mt-3 bg-light-subtle">403 - Access Denied</p>
      {/* <p className="fw-light">{error.data}</p> */}
      <Link to="/" className="btn btn-dark mt-3">
        <i className="bi bi-arrow-left me-2"></i>
        Back to home
      </Link>
    </div>
  );
};

export default AccessDenied;
