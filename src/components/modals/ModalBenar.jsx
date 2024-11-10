/* eslint-disable react/prop-types */
export default function ModalBenar(props) {
  return (
    <div className="modal fade" id={`modalBenar${props.jenis}`} tabIndex="-1" aria-labelledby="modalBenarLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content rounded-4">
          <div className="modal-body text-center bg-lightblue rounded-top-4">
            <div className="bg-blue-subtle p-2 rounded-4">
              <img src="../../icon/icon-benar.png" alt="icon benar" className="py-3" />
              <h5 className="fw-bold mb-2">Jawabanmu sudah tepat.</h5>
              <p className="">{props.children}</p>
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
