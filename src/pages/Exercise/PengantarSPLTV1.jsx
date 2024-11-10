import { useEffect, useState } from 'react';
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

  const handleButtonClick = () => {
    const buttonStates = JSON.parse(localStorage.getItem('buttonStatesTrue')) || {};
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

    if (shouldRemoveBlurKonstanta) setRemoveBlurKonstanta(true);

    if (shouldRemoveBlurKoefisien) setRemoveBlurKoefisien(true);

    if (shouldRemoveBlurNextButton) setRemoveBlurNextButton(true);
  };

  useEffect(() => {
    handleButtonClick(); // Check condition on component mount
  }, []);

  return (
    <Main>
      <h3 className="fw-bold pb-5 my-3">
        Latihan Soal 1 <span className="text-muted fw-medium ms-2 fs-5">Unsur pada SPLTV: Menentukan variabel, konstanta, dan koefisien</span>
      </h3>
      <div className="text-center mb-5">
        <p className=" fs-5">Diberikan Persamaan</p>
        <p className="fw-medium fs-5">2x + 3y = 7 &ensp; ...(1)</p>
        <p className="fw-medium fs-5">5x + y = 11 &ensp; ...(2)</p>
        <p className=" fs-5">Mana saja yang merupakan variabel, konstanta, dan koefisien?</p>
      </div>
      <div className={`bg-blue-subtle mb-3 rounded-4 p-3 border border-blue border-2 text-center ${removeBlurKonstanta ? 'disabled' : ''}`}>
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0">Mana yang merupakan variabel?</p>
        <div className="row justify-content-between px-3">
          <div className="col text-start">
            <p className="fw-semibold">Persamaan 1</p>
            <div className="persamaan">
              <ModalSalahButton id="button1l" jenis="Variabel">
                2
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button2l" jenis="Variabel">
                x
              </ModalBenarButton>
              <button className="disabled">+</button>
              <ModalSalahButton id="button3l" jenis="Variabel">
                3
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button4l" jenis="Variabel">
                y
              </ModalBenarButton>
              <button className="disabled">=</button>
              <ModalSalahButton id="button5l" jenis="Variabel">
                7
              </ModalSalahButton>
            </div>
          </div>
          <div className="col text-end">
            <p className="fw-semibold">Persamaan 2</p>
            <div className="persamaan">
              <ModalSalahButton id="button6l" jenis="Variabel">
                5
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button7l" jenis="Variabel">
                x
              </ModalBenarButton>
              <button className="disabled">+</button>
              <ModalSalahButton id="button8l" jenis="Variabel">
                1
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button9l" jenis="Variabel">
                y
              </ModalBenarButton>
              <button className="disabled">=</button>
              <ModalSalahButton id="button10l" jenis="Variabel">
                11
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

      <div className={`bg-blue-subtle mb-3 rounded-4 p-3 border border-blue border-2 text-center ${removeBlurKonstanta ? '' : 'blur'} ${removeBlurKoefisien ? 'disabled' : ''}`}>
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0">Mana yang merupakan konstanta?</p>
        <div className="row justify-content-between px-3">
          <div className="col text-start">
            <p className="fw-semibold">Persamaan 1</p>
            <div className="persamaan">
              <ModalSalahButton id="button11l" jenis="Konstanta">
                2
              </ModalSalahButton>
              <ModalSalahButton id="button12l" jenis="Konstanta">
                x
              </ModalSalahButton>
              <button className="disabled">+</button>
              <ModalSalahButton id="button13l" jenis="Konstanta">
                3
              </ModalSalahButton>
              <ModalSalahButton id="button14l" jenis="Konstanta">
                y
              </ModalSalahButton>
              <button className="disabled">=</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button15l" jenis="Konstanta">
                7
              </ModalBenarButton>
            </div>
          </div>
          <div className="col text-end">
            <p className="fw-semibold">Persamaan 2</p>
            <div className="persamaan">
              <ModalSalahButton id="button16l" jenis="Konstanta">
                5
              </ModalSalahButton>
              <ModalSalahButton id="button17l" jenis="Konstanta">
                x
              </ModalSalahButton>
              <button className="disabled">+</button>
              <ModalSalahButton id="button18l" jenis="Konstanta">
                1
              </ModalSalahButton>
              <ModalSalahButton id="button19l" jenis="Konstanta">
                y
              </ModalSalahButton>
              <button className="disabled">=</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button20l" jenis="Konstanta">
                11
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

      <div className={`bg-blue-subtle mb-3 rounded-4 p-3 border border-blue border-2 text-center ${removeBlurKoefisien ? '' : 'blur'} ${removeBlurNextButton ? 'disabled' : ''}`}>
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0">Mana yang merupakan koefisien?</p>
        <div className="row justify-content-between px-3">
          <div className="col text-start">
            <p className="fw-semibold">Persamaan 1</p>
            <div className="persamaan">
              <ModalBenarButton onButtonClick={handleButtonClick} id="button21l" jenis="Koefisien">
                2
              </ModalBenarButton>
              <ModalSalahButton id="button22l" jenis="Koefisien">
                x
              </ModalSalahButton>
              <button className="disabled">+</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button23l" jenis="Koefisien">
                3
              </ModalBenarButton>
              <ModalSalahButton id="button24l" jenis="Koefisien">
                y
              </ModalSalahButton>
              <button className="disabled">=</button>
              <ModalSalahButton id="button25l" jenis="Koefisien">
                7
              </ModalSalahButton>
            </div>
          </div>
          <div className="col text-end">
            <p className="fw-semibold">Persamaan 2</p>
            <div className="persamaan">
              <ModalBenarButton onButtonClick={handleButtonClick} id="button26l" jenis="Koefisien">
                5
              </ModalBenarButton>
              <ModalSalahButton id="button27l" jenis="Koefisien">
                x
              </ModalSalahButton>
              <button className="disabled">+</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button28l" jenis="Koefisien">
                1
              </ModalBenarButton>
              <ModalSalahButton id="button29l" jenis="Koefisien">
                y
              </ModalSalahButton>
              <button className="disabled">=</button>
              <ModalSalahButton id="button30l" jenis="Koefisien">
                11
              </ModalSalahButton>
            </div>
          </div>
        </div>
      </div>
      <ModalSalah jenis="Koefisien">
        <b>Koefisien</b> <br />
        Koefisien merupakan suatu bilangan yang menjelaskan banyaknya jumlah variabel
      </ModalSalah>
      {isModalBenarKoefisienOpen && <ModalBenar jenis="Koefisien">Yuk lanjut ke pembelajaran selanjutnya...</ModalBenar>}

      <div className={`d-flex justify-content-center py-4 ${removeBlurNextButton ? '' : 'blur'}`}>
        <NextButton link="/latihan-soal" />
      </div>
    </Main>
  );
}
