import { useEffect, useState } from 'react';
import ModalBenarButton from '../../components/buttons/ModalBenarButton';
import ModalSalahButton from '../../components/buttons/ModalSalahButton';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import ModalBenar from '../../components/modals/ModalBenar';
import ModalSalah from '../../components/modals/ModalSalah';

export default function PengantarSPLTV2() {
  const [removeBlurNextButton, setRemoveBlurNextButton] = useState(false);
  const [isModalBenarOpen, setIsModalBenarOpen] = useState(false);

  const handleButtonClick = () => {
    const buttonStates = JSON.parse(localStorage.getItem('buttonStatesTrueLatsol')) || {};
    const trueButtonsCount = ['button31l', 'button33l', 'button37l'].filter(buttonId => buttonStates[buttonId]).length;
    const shouldRemoveBlurNextButton = trueButtonsCount >= 3;
    const shouldOpenModalBenar = trueButtonsCount >= 2;

    if (shouldRemoveBlurNextButton) {
      localStorage.removeItem('buttonStatesTrueLatsol');
      localStorage.removeItem('buttonStatesFalseLatsol');
      setRemoveBlurNextButton(true);
    }
    if (shouldOpenModalBenar) setIsModalBenarOpen(true);
  };

  useEffect(() => {
    handleButtonClick(); // Check condition on component mount
  }, []);

  return (
    <Main>
      <h3 className="fw-bold pb-5 my-3">
        Latihan Soal 2 <span className="text-muted fw-medium ms-2 fs-5">Bentuk Umum SPLTV: Menentukan variabel, konstanta, dan koefisien</span>
      </h3>

      <div className={`bg-blue-subtle p-4 rounded-4 my-4 ${removeBlurNextButton ? 'disabled' : ''}`} style={{ margin: '0 96px' }}>
        <div className="row mb-4 justify-content-center align-items-center">
          <div className="col-sm-4 ">
            <p className="fs-5 text-center mb-sm-0">Diketahui Bentuk Umum SPLTV</p>
          </div>
          <div className="col-sm-4 text-center">
            <p className="mb-0 fs-5">
              a<sub>1</sub>x + b<sub>1</sub>y + c<sub>1</sub>z = d<sub>1</sub> <br />
            </p>
            <p className="mb-0 fs-5">
              a<sub>2</sub>x + b<sub>2</sub>y + c<sub>2</sub>z = d<sub>2</sub> <br />
            </p>
            <p className="mb-0 fs-5">
              a<sub>3</sub>x + b<sub>3</sub>y + c<sub>3</sub>z = d<sub>3</sub> <br />
            </p>
            <p className="mb-0 fs-5">
              dengan a<sub>i</sub>,b<sub>i</sub>,c<sub>i</sub>,d<sub>i</sub>∈ R,i = 1,2,3
            </p>
          </div>
        </div>
        <div className="container bg-darkblue rounded-4 text-center p-4">
          <p className="">Mana saja yang tepat dari pernyataan di bawah ini?</p>
          <div className="row text-black gap-5 px-5 mb-4">
            <ModalBenarButton onButtonClick={handleButtonClick} id="button31l" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>x, y, dan z</h5>
              <p className="mb-0">merupakan variabel</p>
            </ModalBenarButton>
            <ModalSalahButton id="button32l" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>
                x, y, d<sub>1</sub>, d<sub>2</sub>
              </h5>
              <p className="mb-0">merupakan variabel</p>
            </ModalSalahButton>
            <ModalBenarButton onButtonClick={handleButtonClick} id="button33l" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>
                d<sub>1</sub>, d<sub>2</sub>, d<sub>3</sub>
              </h5>
              <p className="mb-0">merupakan konstanta</p>
            </ModalBenarButton>
          </div>
          <div className="row text-black gap-5 px-5 mb-4">
            <ModalSalahButton id="button34l" className="col bg-lightblue rounded-4 p-2 ms-5 align-self-center">
              <p className="mb-0">terdapat 8 variabel, yaitu</p>
              <h5>
                a<sub>1</sub>, b<sub>1</sub>, c<sub>1</sub>, a<sub>2</sub>, b<sub>2</sub>, c<sub>2</sub>, a<sub>3</sub>, b<sub>3</sub>, dan c<sub>3</sub>,
              </h5>
            </ModalSalahButton>
            <ModalSalahButton id="button35l" className="col bg-lightblue rounded-4 p-2 me-5 align-self-center">
              <p className="mb-0">terdapat 3 konstanta, yaitu</p>
              <h5>x, y, dan z</h5>
            </ModalSalahButton>
          </div>
          <div className="row text-black gap-5 px-5 mb-4">
            <ModalSalahButton id="button36l" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>
                c<sub>3</sub>, z, a<sub>1</sub>, b<sub>1</sub>
              </h5>
              <p className="mb-0">merupakan koefisien</p>
            </ModalSalahButton>
            <ModalBenarButton onButtonClick={handleButtonClick} id="button37l" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>
                a<sub>1</sub>, b<sub>1</sub>, c<sub>1</sub>, a<sub>2</sub>, b<sub>2</sub>, c<sub>2</sub>, a<sub>3</sub>, b<sub>3</sub>, dan c<sub>3</sub>,
              </h5>
              <p className="mb-0">merupakan koefisien</p>
            </ModalBenarButton>
            <ModalSalahButton id="button38l" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>
                a<sub>2</sub>, b<sub>2</sub>, c<sub>2</sub>
              </h5>
              <p className="mb-0">merupakan konstanta</p>
            </ModalSalahButton>
          </div>
        </div>
      </div>
      {isModalBenarOpen && <ModalBenar>Yuk lanjut ke latihan soal lainnya...</ModalBenar>}

      <ModalSalah>
        <b>Variabel</b> merupakan simbol atau huruf suatu nilai yang besarnya belum diketahui secara pasti <br />
        <b>Koefisien</b> merupakan suatu bilangan yang menjelaskan banyaknya jumlah variabel <br />
        <b>Konstanta</b> merupakan nilai tetap yang tidak diikuti oleh variabel di belakangnya
      </ModalSalah>

      <div className={`d-flex justify-content-center py-4 ${removeBlurNextButton ? '' : 'blur'}`}>
        <NextButton link="/latihan-soal" />
      </div>
    </Main>
  );
}
