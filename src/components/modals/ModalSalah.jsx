/* eslint-disable react/prop-types */
export default function ModalSalah(props) {
  return (
    <div className="modal fade" id={`modalSalah${props.jenis}`} tabIndex="-1" aria-labelledby="modalSalahLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content rounded-4">
          <div className="modal-body text-center bg-lightblue rounded-top-4">
            <div className="bg-blue-subtle p-2 rounded-4">
              <img src="../../icon/icon-salah.png" alt="icon salah" className="py-2" />
              <h5 className="fw-bold mb-4">Jawabanmu kurang tepat</h5>
              <div className="bg-lightblue p-4 rounded-4 m-2">
                <p className="mb-0">{props.children}</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center bg-lightblue rounded-bottom-4">
            <button type="button" className="btn mt-0 m-3 bg-darkblue" data-bs-dismiss="modal">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
