/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Modal, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useState } from 'react';

export default function NextButton(props) {
  const [show, setShow] = useState(false); // state buat modal

  const handleClose = () => setShow(false); // nutup modal
  const handleShow = () => setShow(true); // buka modal

  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      Lanjut ke halaman berikutnya
    </Tooltip>
  );

  return (
    <>
      {props.children && !props.confirmation ? (
        <>
          <Modal show={show} onHide={handleClose} centered size="lg" aria-labelledby="modalNextButtonLabel">
            <Modal.Body className="text-center bg-lightblue rounded-top-4">
              <div className="bg-blue-subtle text-black p-2 rounded-4">
                <img src="/icon/task.gif" width={72} alt="icon done" className="my-3 ps-1 bg-white rounded-4" />
                <h5 className="fw-bold mb-2">Wow keren!</h5>
                {props.end ? (
                  <p className="">Kamu telah mempelajari seluruh materi. Terakhir, mari coba kerjakan tes formatif berikut untuk mengetahui pemahamanmu terhadap SPLTV</p>
                ) : props.latsol ? (
                  <p className="">
                    Kamu sudah selesai mengerjakan latihan soal {props.children} <br />
                    Yuk lanjut ke latihan soal selanjutnya!
                  </p>
                ) : (
                  <p className="">
                    Kamu sudah selesai mempelajari materi {props.children} <br />
                    Yuk lanjut ke materi selanjutnya!
                  </p>
                )}
              </div>
            </Modal.Body>
            <div className="d-flex justify-content-center bg-lightblue rounded-bottom-4">
              <Link
                to={props.link}
                className="btn mt-0 m-3 bg-darkblue"
                onClick={handleClose} // tutup modal dulu sebelum navigasi
              >
                OK
              </Link>
            </div>
          </Modal>

          <OverlayTrigger placement="top" delay={{ show: 100, hide: 200 }} overlay={renderTooltip}>
            <a type="button" onClick={handleShow}>
              <img src="/icon/icon-next-dark.png" className="rounded img-fluid" width={64} alt="" />
            </a>
          </OverlayTrigger>
        </>
      ) : (
        <>
          <OverlayTrigger placement="top" delay={{ show: 100, hide: 200 }} overlay={renderTooltip}>
            <Link to={props.link}>
              <img src="/icon/icon-next-dark.png" className="rounded img-fluid" width={64} alt="" />
            </Link>
          </OverlayTrigger>
        </>
      )}
    </>
  );
}
