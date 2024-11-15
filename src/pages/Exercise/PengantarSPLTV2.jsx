import { useEffect, useRef, useState } from 'react';
import ModalBenarButton from '../../components/buttons/ModalBenarButton';
import ModalSalahButton from '../../components/buttons/ModalSalahButton';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import ModalBenar from '../../components/modals/ModalBenar';
import ModalSalah from '../../components/modals/ModalSalah';

export default function PengantarSPLTV2() {
  const [removeBlurNextButton, setRemoveBlurNextButton] = useState(false);
  const [isModalBenarOpen, setIsModalBenarOpen] = useState(false);

  const nextButtonSection = useRef(null);
  const [isNextButtonSectionFocus, setIsNextButtonSectionFocus] = useState(false);

  const handleButtonClick = () => {
    const buttonStates = JSON.parse(localStorage.getItem('buttonStatesTrueLatsol')) || {};
    const trueButtonsCount = ['button31l', 'button33l', 'button37l'].filter(buttonId => buttonStates[buttonId]).length;
    const shouldRemoveBlurNextButton = trueButtonsCount >= 3;
    const shouldOpenModalBenar = trueButtonsCount >= 2;

    if (shouldRemoveBlurNextButton) {
      localStorage.removeItem('buttonStatesTrueLatsol');
      localStorage.removeItem('buttonStatesFalseLatsol');
      setIsNextButtonSectionFocus(true); // reset ke false setelah autoscroll
      setRemoveBlurNextButton(true);
    }
    if (shouldOpenModalBenar) setIsModalBenarOpen(true);
  };

  useEffect(() => {
    if (isNextButtonSectionFocus && nextButtonSection.current) {
      nextButtonSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    handleButtonClick(); // Check condition on component mount
  }, [isNextButtonSectionFocus]);

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Pengantar SPLTV Latihan Soal 2 <span className="text-muted fw-medium ms-sm-2 fs-5">Bentuk Umum SPLTV: Menentukan variabel, konstanta, dan koefisien</span>
      </h3>

      <div className={`bg-blue-subtle p-4 rounded-4 my-4 ${removeBlurNextButton ? 'disabled' : ''}`}>
        <div className="row mb-4 justify-content-center align-items-center">
          <div className="col-sm-4 ">
            <p className="text-center mb-sm-0">Jika diberikan bentuk SPLTV sebagai berikut</p>
          </div>
          <div className="col-sm-4 text-center">
            <p className="mb-0 ">
              h<sub>1</sub>p + i<sub>1</sub>q + j<sub>1</sub>r = k<sub>1</sub> <br />
            </p>
            <p className="mb-0 ">
              h<sub>2</sub>p + i<sub>2</sub>q + j<sub>2</sub>r = k<sub>2</sub> <br />
            </p>
            <p className="mb-0 ">
              h<sub>3</sub>p + i<sub>3</sub>q + j<sub>3</sub>r = k<sub>3</sub> <br />
            </p>
            <p className="mb-0 ">
              dengan h<sub>x</sub>,i<sub>x</sub>,j<sub>x</sub>,k<sub>x</sub>∈ R,x = 1,2,3
            </p>
          </div>
        </div>
        <div className="container bg-darkblue rounded-4 text-center p-4">
          <p className="">Mana saja yang merupakan variabel, koefisien, dan konstanta?</p>
          <div className="row text-black gap-sm-5 mb-sm-4 justify-content-center">
            <ModalBenarButton onButtonClick={handleButtonClick} id="button31l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0">p, q, dan r</h6>
              <p className="mb-0 fw-light">merupakan variabel</p>
            </ModalBenarButton>
            <ModalSalahButton id="button32l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0">h, i, j, dan k</h6>
              <p className="mb-0 fw-light">merupakan variabel</p>
            </ModalSalahButton>
            <ModalSalahButton id="button38l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0">
                h<sub>x</sub>, i<sub>x</sub>, j<sub>x</sub>, dan k<sub>x</sub>
              </h6>
              <p className="mb-0 fw-light">merupakan konstanta</p>
            </ModalSalahButton>
          </div>
          <div className="row text-black gap-sm-5 mb-sm-4 justify-content-center">
            <ModalSalahButton id="button34l" className="col-11 col-sm-4 bg-lightblue rounded-4 p-2 align-self-center">
              <p className="mb-0 fw-light">terdapat 8 variabel, yaitu</p>
              <h6 className="fw-bold mb-0">
                h<sub>1</sub>, i<sub>1</sub>, j<sub>1</sub>, h<sub>2</sub>, i<sub>2</sub>, j<sub>2</sub>, h<sub>3</sub>, i<sub>3</sub>, dan j<sub>3</sub>,
              </h6>
            </ModalSalahButton>
            <ModalBenarButton onButtonClick={handleButtonClick} id="button37l" className="col-11 col-sm-4 bg-lightblue rounded-4 p-2  align-self-center">
              <h6 className="fw-bold mb-0">
                h<sub>1</sub>, i<sub>1</sub>, j<sub>1</sub>, h<sub>2</sub>, i<sub>2</sub>, j<sub>2</sub>, h<sub>3</sub>, i<sub>3</sub>, dan j<sub>3</sub>,
              </h6>
              <p className="mb-0 fw-light">merupakan koefisien</p>
            </ModalBenarButton>
          </div>
          <div className="row text-black gap-sm-5 justify-content-center">
            <ModalSalahButton id="button36l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0">
                k<sub>1</sub>, k<sub>2</sub>, dan k<sub>3</sub>
              </h6>
              <p className="mb-0 fw-light">merupakan koefisien</p>
            </ModalSalahButton>
            <ModalSalahButton id="button35l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <p className="mb-0 fw-light">terdapat 3 konstanta, yaitu</p>
              <h6 className="fw-bold mb-0">p, q, dan r</h6>
            </ModalSalahButton>
            <ModalBenarButton onButtonClick={handleButtonClick} id="button33l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0">
                k<sub>1</sub>, k<sub>2</sub>, dan k<sub>3</sub>
              </h6>
              <p className="mb-0 fw-light">merupakan konstanta</p>
            </ModalBenarButton>
          </div>
        </div>
      </div>
      {isModalBenarOpen && <ModalBenar>Yuk lanjut ke latihan soal lainnya...</ModalBenar>}

      <ModalSalah>
        <b>Variabel</b> merupakan simbol atau huruf suatu nilai yang besarnya belum diketahui secara pasti <br />
        <b>Koefisien</b> merupakan suatu bilangan yang menjelaskan banyaknya jumlah variabel <br />
        <b>Konstanta</b> merupakan nilai tetap yang tidak diikuti oleh variabel di belakangnya
      </ModalSalah>

      <div ref={nextButtonSection} className={`d-flex justify-content-center py-4 ${removeBlurNextButton ? '' : 'blur'}`}>
        <NextButton link="/latihan-soal" />
      </div>
    </Main>
  );
}
