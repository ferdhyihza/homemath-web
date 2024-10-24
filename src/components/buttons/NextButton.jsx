export default function NextButton(link) {
  return (
    <a href={link.link} className=" bg-darkblue py-2 d-flex justify-content-center rounded-1" id="next-page-button">
      <img src="./next-page-icon.png" className="img-fluid w-50" alt="" />
    </a>
  );
}
