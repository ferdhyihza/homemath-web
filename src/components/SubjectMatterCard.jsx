/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function SubjectMatterCard(props) {
  return (
    <>
      <Link to={props.link} className={`${props.className} border d-flex rounded-3 mb-4 p-2 materi`}>
        {props.number && <div className="number p-3 fs-1">{props.number}</div>}
        <div className="content p-2 w-100">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold p-2 d-none d-sm-inline-block hover-underline">{props.title}</h5>
            <h6 className="fw-bold p-2 d-inline-block d-sm-none hover-underline">{props.title}</h6> {/* mobile version */}
            {props.progress && (
              <>
                <h5 className="fw-bold p-2 d-none d-sm-inline-block text-lightblue-subtle">
                  <span className="fw-medium">Progress</span>: {props.progress}%
                </h5>
                <h6 className="fw-bold p-2 d-inline-block d-sm-none text-lightblue-subtle">
                  {/* mobile version */}
                  {props.progress}%
                </h6>
              </>
            )}
          </div>
          <hr className="my-0" />
          <ul className="p-1 mb-0 d-sm-flex gap-3">{props.children}</ul>
        </div>
      </Link>
    </>
  );
}
