/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function ExerciseCard(props) {
  return (
    <>
      <Link to={props.link} className={`${props.className} border d-flex rounded-3 mb-4 p-2 materi`}>
        {props.number && (
          <div className="number px-3 py-2 fs-1 text-center d-flex flex-column align-items-center justify-content-center">
            {/* <h6 className="mb-0" style={{ fontSize: '14px' }}>
              Materi
            </h6> */}
            0{props.number}
          </div>
        )}
        <div className="content p-2 w-100">
          <h5 className="fw-bold mb-0 p-2 d-none d-sm-inline-block hover-underline">{props.title}</h5>
          <h6 className="fw-bold mb-0 p-2 d-inline-block d-sm-none hover-underline">{props.title}</h6> {/* mobile version */}
          <hr className="mt-0 mb-0" />
          <p className="p-2 mb-0 fw-medium" style={{ fontSize: '14px' }}>
            {props.children}
          </p>
        </div>
      </Link>
    </>
  );
}
