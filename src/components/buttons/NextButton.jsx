import { Link } from 'react-router-dom';

export default function NextButton(to) {
  return (
    <>
      <Link to={to.to} className="btn btn-primary bg-darkblue py-2  rounded-1" id="next-page-button">
        <img src="./next-page-icon.png" className="img-fluid" alt="" />
      </Link>
    </>
  );
}
