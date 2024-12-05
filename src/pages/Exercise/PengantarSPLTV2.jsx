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
    const trueButtonsCount = ['button31l', 'button38l', 'button33l', 'button35l', 'button37l'].filter(buttonId => buttonStates[buttonId]).length;
    const shouldRemoveBlurNextButton = trueButtonsCount >= 5;
    const shouldOpenModalBenar = trueButtonsCount >= 4;

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
        Pengantar SPLTV Latihan Soal 2 <span className="text-muted fw-medium ms-sm-2 fs-5">Menentukan Persamaan Linear Tiga Variabel</span>
      </h3>

      <div className={`bg-blue-subtle p-4 rounded-4 my-4 ${removeBlurNextButton ? 'disabled' : ''}`}>
        {/* <div className="row mb-4 justify-content-center align-items-center">
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
        </div> */}
        <div className="container bg-darkblue rounded-4 text-center p-4">
          <p className="">Manakah diantara persamaan berikut yang termasuk Persamaan Linear Tiga Variabel (PLTV)?</p>
          <div className="row text-black gap-sm-5 mb-sm-4 justify-content-center">
            <ModalBenarButton onButtonClick={handleButtonClick} id="button31l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0 py-2">3a + 20 = 5b + 3a + c</h6>
            </ModalBenarButton>
            <ModalSalahButton id="button32l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0 py-2">
                3a<sup>2</sup> + 5b + c = 15
              </h6>
            </ModalSalahButton>
            <ModalBenarButton onButtonClick={handleButtonClick} id="button38l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0 py-2">x + 2y - z = 3x - 2</h6>
            </ModalBenarButton>
          </div>
          <div className="row text-black gap-sm-5 mb-sm-4 justify-content-center">
            <ModalBenarButton onButtonClick={handleButtonClick} id="button37l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2  align-self-center">
              <h6 className="fw-bold mb-0 py-2">40 - x - y = 5z</h6>
            </ModalBenarButton>
            <ModalSalahButton id="button34l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0 py-2">
                2x + 6y<sup>½</sup> + z = 14
              </h6>
            </ModalSalahButton>
            <ModalSalahButton id="buttonr1l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0 py-2">
                p<sup>2</sup> + q<sup>2</sup> + r<sup>2</sup> = s<sup>2</sup>
              </h6>
            </ModalSalahButton>
          </div>
          <div className="row text-black gap-sm-5 justify-content-center">
            <ModalSalahButton id="button36l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0 py-2">5x - z = 9</h6>
            </ModalSalahButton>
            <ModalBenarButton onButtonClick={handleButtonClick} id="button35l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0 py-2">3p + q - r = 18</h6>
            </ModalBenarButton>
            <ModalBenarButton onButtonClick={handleButtonClick} id="button33l" className="col-11 col-sm-3 bg-lightblue rounded-4 p-2 align-self-center">
              <h6 className="fw-bold mb-0 py-2">f - 2h + 6 = 4g - 2</h6>
            </ModalBenarButton>
          </div>
        </div>
      </div>
      {isModalBenarOpen && <ModalBenar>Yuk lanjut ke latihan soal lainnya...</ModalBenar>}

      <ModalSalah>Ingat! Persamaan linear yang terdiri ataa tiga variabel</ModalSalah>

      <div ref={nextButtonSection} className={`d-flex justify-content-center py-4 ${removeBlurNextButton ? '' : 'blur'}`}>
        <NextButton link="/latihan-soal" />
      </div>
    </Main>
  );
}
