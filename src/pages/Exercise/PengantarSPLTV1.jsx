import { useEffect, useRef, useState } from 'react';
import ModalBenarButton from '../../components/buttons/ModalBenarButton';
import ModalSalahButton from '../../components/buttons/ModalSalahButton';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import ModalBenar from '../../components/modals/ModalBenar';
import ModalSalah from '../../components/modals/ModalSalah';

export default function PengantarSPLTV1() {
  const [removeBlurKonstanta, setRemoveBlurKonstanta] = useState(false);
  const [removeBlurKoefisien, setRemoveBlurKoefisien] = useState(false);
  const [removeBlurNextButton, setRemoveBlurNextButton] = useState(false);
  // const [isModalBenarVariabelOpen, setIsModalBenarVariabelOpen] = useState(false);
  // const [isModalBenarKonstantaOpen, setIsModalBenarKonstantaOpen] = useState(false);
  const [isModalBenarKoefisienOpen, setIsModalBenarKoefisienOpen] = useState(false);

  const konstantaSection = useRef(null);
  const koefisienSection = useRef(null);
  const nextButtonSection = useRef(null);

  const [isKonstantaSectionFocus, setIsKonstantaSectionFocus] = useState(false);
  const [isKoefisienSectionFocus, setIsKoefisienSectionFocus] = useState(false);
  const [, setIsNextButtonSectionFocus] = useState(false);

  const handleButtonClick = () => {
    const buttonStates = JSON.parse(localStorage.getItem('buttonStatesTrueLatsol')) || {};
    const trueButtonsCountVariabel = ['button2l', 'button4l', 'button7l', 'button9l'].filter(buttonId => buttonStates[buttonId]).length;
    const trueButtonsCountKonstanta = ['button15l', 'button20l'].filter(buttonId => buttonStates[buttonId]).length;
    const trueButtonsCountKoefisien = ['button21l', 'button23l', 'button26l', 'button28l'].filter(buttonId => buttonStates[buttonId]).length;

    // const shouldOpenModalBenarVariabel = trueButtonsCountVariabel == 3;
    // const shouldOpenModalBenarKonstanta = trueButtonsCountKonstanta == 1;
    const shouldOpenModalBenarKoefisien = trueButtonsCountKoefisien == 3;

    // if (shouldOpenModalBenarVariabel) setIsModalBenarVariabelOpen(true);
    // if (shouldOpenModalBenarKonstanta) setIsModalBenarKonstantaOpen(true);
    if (shouldOpenModalBenarKoefisien) setIsModalBenarKoefisienOpen(true);

    const shouldRemoveBlurKonstanta = trueButtonsCountVariabel == 4;
    const shouldRemoveBlurKoefisien = trueButtonsCountKonstanta == 2;
    const shouldRemoveBlurNextButton = trueButtonsCountKoefisien == 4;

    if (shouldRemoveBlurKonstanta) {
      setRemoveBlurKonstanta(true);
      setIsKonstantaSectionFocus(true);
    }

    if (shouldRemoveBlurKoefisien) {
      setRemoveBlurKoefisien(true);
      setIsKoefisienSectionFocus(true);
    }

    if (shouldRemoveBlurNextButton) {
      setRemoveBlurNextButton(true);
      setIsNextButtonSectionFocus(true);
      setIsKonstantaSectionFocus(false);
      setIsKoefisienSectionFocus(false);
      localStorage.removeItem('buttonStatesTrueLatsol');
      localStorage.removeItem('buttonStatesFalseLatsol');
    }
  };

  useEffect(() => {
    if (isKonstantaSectionFocus && konstantaSection.current) {
      konstantaSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setIsKonstantaSectionFocus(false); // reset ke false setelah autoscroll
    }
    if (isKoefisienSectionFocus && koefisienSection.current) {
      koefisienSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setIsKoefisienSectionFocus(false); // reset ke false setelah autoscroll
    }
    handleButtonClick(); // Check condition on component mount
  }, [isKoefisienSectionFocus, isKonstantaSectionFocus]);

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Pengantar SPLTV Latihan Soal 1 <span className="text-muted fw-medium ms-sm-2 fs-5">Menentukan variabel, konstanta, dan koefisien</span>
      </h3>
      <div className="text-center mb-5">
        <p className="">Diberikan Persamaan</p>
        <p className="fw-medium mb-1">5j - 1k = 0 &ensp; ...(1)</p>
        <p className="fw-medium">6j + (-3)k = -9 &ensp; ...(2)</p>
        <p className="">Mana saja yang merupakan variabel, konstanta, dan koefisien?</p>
      </div>
      <div className={`bg-blue-subtle mb-3 rounded-4 p-2  pb-sm-0 border border-blue border-2 text-center ${removeBlurKonstanta ? 'disabled mx-2 mx-sm-5' : ''}`}>
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0 mt-2">Mana yang merupakan variabel?</p>
        <div className="row justify-content-between px-sm-3 py-4 pt-sm-0 gap-4 gap-sm-0">
          <div className="col-sm-6 text-sm-start px-0">
            <p className="fw-semibold m-2">Persamaan 1</p>
            <div className="persamaan">
              <ModalSalahButton id="button1l" jenis="Variabel">
                5
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button2l" jenis="Variabel">
                j
              </ModalBenarButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">-</button>
              <ModalSalahButton id="button3l" jenis="Variabel">
                1
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button4l" jenis="Variabel">
                k
              </ModalBenarButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalSalahButton id="button5l" jenis="Variabel">
                0
              </ModalSalahButton>
            </div>
          </div>
          <div className="col-sm-6 text-sm-end px-0">
            <p className="fw-semibold m-2">Persamaan 2</p>
            <div className="persamaan">
              <ModalSalahButton id="button6l" jenis="Variabel">
                6
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button7l" jenis="Variabel">
                j
              </ModalBenarButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">+</button>
              <ModalSalahButton id="button8l" jenis="Variabel">
                (-3)
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button9l" jenis="Variabel">
                k
              </ModalBenarButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalSalahButton id="button10l" jenis="Variabel">
                -9
              </ModalSalahButton>
            </div>
          </div>
        </div>
      </div>
      <ModalSalah jenis="Variabel">
        <b>Variabel</b> <br />
        Merupakan simbol atau huruf suatu nilai yang besarnya belum diketahui secara pasti
      </ModalSalah>
      {/* {isModalBenarVariabelOpen && <ModalBenar jenis="Variabel">Yuk lanjut ke pembelajaran selanjutnya...</ModalBenar>} */}

      <div ref={konstantaSection} className={`bg-blue-subtle mb-3 rounded-4 p-2  pb-sm-0 border border-blue border-2 text-center ${removeBlurKonstanta ? '' : 'blur mx-4 mx-sm-5'} ${removeBlurKoefisien ? 'disabled mx-2 mx-sm-5' : ''}`}>
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0 mt-2">Mana yang merupakan konstanta?</p>
        <div className="row justify-content-between px-sm-3 py-4 pt-sm-0 gap-4 gap-sm-0">
          <div className="col-sm-6 text-sm-start px-0">
            <p className="fw-semibold m-2">Persamaan 1</p>
            <div className="persamaan">
              <ModalSalahButton id="button11l" jenis="Konstanta">
                5
              </ModalSalahButton>
              <ModalSalahButton id="button12l" jenis="Konstanta">
                j
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">-</button>
              <ModalSalahButton id="button13l" jenis="Konstanta">
                1
              </ModalSalahButton>
              <ModalSalahButton id="button14l" jenis="Konstanta">
                k
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button15l" jenis="Konstanta">
                0
              </ModalBenarButton>
            </div>
          </div>
          <div className="col-sm-6 text-sm-end px-0">
            <p className="fw-semibold m-2">Persamaan 2</p>
            <div className="persamaan">
              <ModalSalahButton id="button16l" jenis="Konstanta">
                6
              </ModalSalahButton>
              <ModalSalahButton id="button17l" jenis="Konstanta">
                j
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">+</button>
              <ModalSalahButton id="button18l" jenis="Konstanta">
                (-3)
              </ModalSalahButton>
              <ModalSalahButton id="button19l" jenis="Konstanta">
                k
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button20l" jenis="Konstanta">
                -9
              </ModalBenarButton>
            </div>
          </div>
        </div>
      </div>
      <ModalSalah jenis="Konstanta">
        <b>Konstanta</b> <br />
        Konstanta merupakan nilai tetap yang tidak diikuti oleh variabel di belakangnya
      </ModalSalah>
      {/* {isModalBenarKonstantaOpen && <ModalBenar jenis="Konstanta">Yuk lanjut ke pembelajaran selanjutnya...</ModalBenar>} */}

      <div ref={koefisienSection} className={`bg-blue-subtle mb-3 rounded-4 p-2  pb-sm-0 border border-blue border-2 text-center ${removeBlurKoefisien ? '' : 'blur mx-4 mx-sm-5'} ${removeBlurNextButton ? 'disabled mx-2 mx-sm-5' : ''}`}>
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0 mt-2">Mana yang merupakan koefisien?</p>
        <div className="row justify-content-between px-sm-3 py-4 pt-sm-0 gap-4 gap-sm-0">
          <div className="col-sm-6 text-sm-start px-0">
            <p className="fw-semibold m-2">Persamaan 1</p>
            <div className="persamaan">
              <ModalBenarButton onButtonClick={handleButtonClick} id="button21l" jenis="Koefisien">
                5
              </ModalBenarButton>
              <ModalSalahButton id="button22l" jenis="Koefisien">
                j
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">-</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button23l" jenis="Koefisien">
                1
              </ModalBenarButton>
              <ModalSalahButton id="button24l" jenis="Koefisien">
                k
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalSalahButton id="button25l" jenis="Koefisien">
                0
              </ModalSalahButton>
            </div>
          </div>
          <div className="col-sm-6 text-sm-end px-0">
            <p className="fw-semibold m-2">Persamaan 2</p>
            <div className="persamaan">
              <ModalBenarButton onButtonClick={handleButtonClick} id="button26l" jenis="Koefisien">
                6
              </ModalBenarButton>
              <ModalSalahButton id="button27l" jenis="Koefisien">
                j
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">+</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button28l" jenis="Koefisien">
                (-3)
              </ModalBenarButton>
              <ModalSalahButton id="button29l" jenis="Koefisien">
                k
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalSalahButton id="button30l" jenis="Koefisien">
                -9
              </ModalSalahButton>
            </div>
          </div>
        </div>
      </div>
      <ModalSalah jenis="Koefisien">
        <b>Koefisien</b> <br />
        Koefisien merupakan suatu bilangan yang menjelaskan banyaknya jumlah variabel
      </ModalSalah>
      {isModalBenarKoefisienOpen && <ModalBenar jenis="Koefisien">Yuk lanjut ke latihan soal lainnya...</ModalBenar>}

      <div ref={nextButtonSection} className={`d-flex justify-content-center py-4 ${removeBlurNextButton ? '' : 'blur'}`}>
        <NextButton link="/latihan-soal" />
      </div>
    </Main>
  );
}
