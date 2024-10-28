export default function NextButton(link) {
  return (
    <>
      <a href={link.link} className="btn btn-primary bg-darkblue py-2  rounded-1" id="next-page-button">
        <img src="./next-page-icon.png" className="img-fluid" alt="" />
      </a>
    </>
  );
}
