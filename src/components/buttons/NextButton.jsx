import { Link } from 'react-router-dom';

export default function NextButton(link) {
  return (
    <>
      <Link to={link.link} className="">
        <img src="../../next-page-icon.png" className="rounded img-fluid" alt="" />
      </Link>
    </>
  );
}
