export default function ModalAlertTesFormatif() {
  return (
    <div className="modal fade" id={`modalAlert`} tabIndex="-1" aria-labelledby="modalAlertLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content rounded-4">
          <div className="modal-body text-center bg-lightblue rounded-top-4">
            <div className="bg-blue-subtle p-2 rounded-4">
              <img src="../../icon/icon-salah.png" alt="icon salah" className="py-3" />
              <h5 className="fw-bold mb-2">Belum bisa diakses</h5>
              <p className="">Selesaikan seluruh rangkaian sesi materi terlebih dahulu!</p>
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
