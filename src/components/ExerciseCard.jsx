/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function ExerciseCard(props) {
  return (
    <>
      <Link to={props.link} className="border d-flex rounded-3 mb-4 p-2 materi">
        <div className="content p-2 w-100">
          <h5 className="fw-bold p-2 d-inline-block hover-underline">{props.title}</h5>
          <hr className="my-0" />
          <p className="p-2 mb-0 fw-medium">{props.children}</p>
        </div>
      </Link>
    </>
  );
}
