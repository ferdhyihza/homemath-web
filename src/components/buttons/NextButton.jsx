import { Link } from 'react-router-dom';

export default function NextButton(link) {
  return (
    <>
      <Link to={link.link}>
        <img src="../../icon/icon-next-dark.png" className="rounded img-fluid" width={64} alt="" />
      </Link>
    </>
  );
}
