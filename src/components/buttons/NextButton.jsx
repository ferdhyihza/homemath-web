/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';

export default function NextButton(props) {
  const handleModalClose = () => {
    // tutup modal manual pakai Bootstrap JS
    const modal = document.getElementById('modalNextButton');
    const bootstrapModal = bootstrapBundleMin.Modal.getInstance(modal);
    if (bootstrapModal) bootstrapModal.hide(); // tutup modal
  };

  return (
    <>
      {props.children && !props.confirmation ? (
        <>
          <div className="modal fade" id={`modalNextButton`} tabIndex="-1" aria-labelledby="modalNextButtonLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content rounded-4">
                <div className="modal-body text-center bg-lightblue rounded-top-4">
                  <div className="bg-blue-subtle text-black p-2 rounded-4">
                    <img src="/icon/task.gif" width={72} alt="icon done" className="my-3 ps-1 bg-white rounded-4" />
                    <h5 className="fw-bold mb-2">Wow keren!</h5>
                    {props.end ? (
                      <p className="">Kamu telah mempelajari seluruh materi. Terakhir, mari coba kerjakan tes formatif berikut untuk mengetahui pemahamanmu terhadap SPLTV</p>
                    ) : (
                      <p className="">
                        Kamu sudah selesai mempelajari materi {props.children} <br />
                        Yuk lanjut ke materi selanjutnya!
                      </p>
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-center bg-lightblue rounded-bottom-4">
                  <Link to={props.link} className="btn mt-0 m-3 bg-darkblue" onClick={handleModalClose}>
                    OK
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <a type="button" data-bs-toggle="modal" data-bs-target={`#modalNextButton`}>
            <img src="/icon/icon-next-dark.png" className="rounded img-fluid" width={64} alt="" />
          </a>
        </>
      ) : (
        <Link to={props.link}>
          <img src="/icon/icon-next-dark.png" className="rounded img-fluid" width={64} alt="" />
        </Link>
      )}
    </>
  );
}
