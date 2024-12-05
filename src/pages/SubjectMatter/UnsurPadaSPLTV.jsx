import { useEffect, useRef, useState } from 'react';
import ModalBenarButton from '../../components/buttons/ModalBenarButton';
import ModalSalahButton from '../../components/buttons/ModalSalahButton';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import ModalBenar from '../../components/modals/ModalBenar';
import ModalSalah from '../../components/modals/ModalSalah';
import { useSearchParams } from 'react-router-dom';

export default function UnsurPadaSPLTV() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from') == 'materi';

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
  const [isNextButtonSectionFocus, setIsNextButtonSectionFocus] = useState(false);

  const handleButtonClick = () => {
    const buttonStates = JSON.parse(localStorage.getItem('buttonStatesTrue')) || {};
    const trueButtonsCountVariabel = ['button2', 'button4', 'button7', 'button9'].filter(buttonId => buttonStates[buttonId]).length;
    const trueButtonsCountKonstanta = ['button15', 'button20'].filter(buttonId => buttonStates[buttonId]).length;
    const trueButtonsCountKoefisien = ['button21', 'button23', 'button26', 'button28'].filter(buttonId => buttonStates[buttonId]).length;

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
      localStorage.removeItem('buttonStatesFalse');
    }
  };

  const sessionData = JSON.parse(localStorage.getItem('sessionData'));
  useEffect(() => {
    if (isKonstantaSectionFocus && konstantaSection.current) {
      konstantaSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setIsKonstantaSectionFocus(false); // reset ke false setelah autoscroll
    }
    if (isKoefisienSectionFocus && koefisienSection.current) {
      koefisienSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setIsKoefisienSectionFocus(false); // reset ke false setelah autoscroll
    }

    if (isNextButtonSectionFocus && sessionData?.UnsurPadaSPLTV) {
      return;
    } else {
      if (isNextButtonSectionFocus && nextButtonSection.current) {
        nextButtonSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const newSessionData = {
          ...sessionData,
          UnsurPadaSPLTV: true,
        };
        localStorage.setItem('sessionData', JSON.stringify(newSessionData));
      }
    }
    handleButtonClick(); // Check condition on component mount
  }, [isKonstantaSectionFocus, isKoefisienSectionFocus, isNextButtonSectionFocus, sessionData]);

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">Unsur pada PLTV</h3>
      <p>
        Mari kita ingat sejenak, unsur-unsur yang terdapat pada sistem persamaan linear. <br />
        <b>Masih ingatkah unsur apa saja yang ada pada persamaan linear?</b>
      </p>
      <p>Jika sudah lupa, coba simak penjelasan berikut.</p>
      <p className="bg-darkblue px-2 py-1 fw-bold mb-2 d-inline-block rounded-3">Variabel</p>
      <p>
        Merupakan simbol atau huruf suatu nilai yang besarnya belum diketahui secara pasti. Variabel biasanya dilambangkan dengan huruf x, y, z atau lain sebagainya. <br />
        Contoh: <br /> - Diberikan 2x + 3y = 7. Pada persamaan tersebut, yang merupakan variabel adalah x dan y. <br /> - Diberikan a - b + 2c = 2. Pada persamaan tersebut, a, b, dan c merupakan variabel.
      </p>
      <p className="bg-darkblue px-2 py-1 fw-bold mb-2 d-inline-block rounded-3">Koefisien</p>
      <p>
        Koefisien merupakan suatu bilangan yang menjelaskan banyaknya jumlah variabel. <br /> Contoh: <br /> - Diberikan 2x + 3y = 7. Pada contoh persamaan tersebut, yang merupakan koefisien adalah 2 dan 3. <br /> - Diberikan 3p = 4q + 5 +
        r. Pada persamaan tersebut, 3, 4, dan 1 merupakan koefisien.
      </p>
      <p className="bg-darkblue px-2 py-1 fw-bold mb-2 d-inline-block rounded-3">Konstanta</p>
      <p>
        Konstanta merupakan nilai tetap atau konstan yang tidak diikuti oleh variabel di belakangnya. <br /> Contoh: <br /> - Diberikan 2x + 3y = 7. Pada persamaan tersebut, angka 7 merupakan konstanta. <br /> - Diberikan 10 - 2j - 3k = l.
        Pada persamaan tersebut, 10 merupakan konstanta.
      </p>
      <p>Untuk membantu kalian mengingat kembali unsur-unsur di atas, coba lakukan kegiatan berikut ini.</p>
      <p>
        Diberikan persamaan: <br />
        2h - 7 = 3i &ensp; ...(1) <br />
        5x + y = 11 &ensp; ...(2) <br />
        Mana saja yang merupakan variabel, konstanta, dan koefisien?
      </p>
      <div className={`bg-blue-subtle mb-3 rounded-4 p-2  pb-sm-0 border border-blue border-2 text-center ${removeBlurKonstanta ? 'disabled mx-2 mx-sm-5' : ''}`}>
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0 mt-2">Mana yang merupakan variabel?</p>
        <div className="row justify-content-between px-sm-3 py-4 pt-sm-0 gap-4 gap-sm-0">
          <div className="col-sm-6 text-sm-start px-0">
            <p className="fw-semibold m-2">Persamaan 1</p>
            <div className="persamaan">
              <ModalSalahButton id="button1" jenis="Variabel">
                2
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button2" jenis="Variabel">
                h
              </ModalBenarButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">-</button>
              <ModalSalahButton id="button5" jenis="Variabel">
                7
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalSalahButton id="button3" jenis="Variabel">
                3
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button4" jenis="Variabel">
                i
              </ModalBenarButton>
            </div>
          </div>
          <div className="col-sm-6 text-sm-end px-0">
            <p className="fw-semibold m-2">Persamaan 2</p>
            <div className="persamaan">
              <ModalSalahButton id="button6" jenis="Variabel">
                5
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button7" jenis="Variabel">
                x
              </ModalBenarButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">+</button>
              <ModalSalahButton id="button8" jenis="Variabel">
                1
              </ModalSalahButton>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button9" jenis="Variabel">
                y
              </ModalBenarButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalSalahButton id="button10" jenis="Variabel">
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

      <div ref={konstantaSection} className={`bg-blue-subtle mb-3 rounded-4 p-2  pb-sm-0 border border-blue border-2 text-center ${removeBlurKonstanta ? '' : 'blur mx-4 mx-sm-5'} ${removeBlurKoefisien ? 'disabled mx-2 mx-sm-5' : ''}`}>
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0 mt-2">Mana yang merupakan konstanta?</p>
        <div className="row justify-content-between px-sm-3 py-4 pt-sm-0 gap-4 gap-sm-0">
          <div className="col-sm-6 text-sm-start px-0">
            <p className="fw-semibold m-2">Persamaan 1</p>
            <div className="persamaan">
              <ModalSalahButton id="button11" jenis="Konstanta">
                2
              </ModalSalahButton>
              <ModalSalahButton id="button12" jenis="Konstanta">
                h
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">-</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button15" jenis="Konstanta">
                7
              </ModalBenarButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalSalahButton id="button13" jenis="Konstanta">
                3
              </ModalSalahButton>
              <ModalSalahButton id="button14" jenis="Konstanta">
                i
              </ModalSalahButton>
            </div>
          </div>
          <div className="col-sm-6 text-sm-end px-0">
            <p className="fw-semibold m-2">Persamaan 2</p>
            <div className="persamaan">
              <ModalSalahButton id="button16" jenis="Konstanta">
                5
              </ModalSalahButton>
              <ModalSalahButton id="button17" jenis="Konstanta">
                x
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">+</button>
              <ModalSalahButton id="button18" jenis="Konstanta">
                1
              </ModalSalahButton>
              <ModalSalahButton id="button19" jenis="Konstanta">
                y
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button20" jenis="Konstanta">
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

      <div ref={koefisienSection} className={`bg-blue-subtle mb-3 rounded-4 p-2  pb-sm-0 border border-blue border-2 text-center ${removeBlurKoefisien ? '' : 'blur mx-4 mx-sm-5'} ${removeBlurNextButton ? 'disabled mx-2 mx-sm-5' : ''}`}>
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0 mt-2">Mana yang merupakan koefisien?</p>
        <div className="row justify-content-between px-sm-3 py-4 pt-sm-0 gap-4 gap-sm-0">
          <div className="col-sm-6 text-sm-start px-0">
            <p className="fw-semibold m-2">Persamaan 1</p>
            <div className="persamaan">
              <ModalBenarButton onButtonClick={handleButtonClick} id="button21" jenis="Koefisien">
                2
              </ModalBenarButton>
              <ModalSalahButton id="button22" jenis="Koefisien">
                h
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">-</button>
              <ModalSalahButton id="button25" jenis="Koefisien">
                7
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button23" jenis="Koefisien">
                3
              </ModalBenarButton>
              <ModalSalahButton id="button24" jenis="Koefisien">
                i
              </ModalSalahButton>
            </div>
          </div>
          <div className="col-sm-6 text-sm-end px-0">
            <p className="fw-semibold m-2">Persamaan 2</p>
            <div className="persamaan">
              <ModalBenarButton onButtonClick={handleButtonClick} id="button26" jenis="Koefisien">
                5
              </ModalBenarButton>
              <ModalSalahButton id="button27" jenis="Koefisien">
                x
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">+</button>
              <ModalBenarButton onButtonClick={handleButtonClick} id="button28" jenis="Koefisien">
                1
              </ModalBenarButton>
              <ModalSalahButton id="button29" jenis="Koefisien">
                y
              </ModalSalahButton>
              <button className="disabled px-1 m-1 py-sm-2 px-sm-3">=</button>
              <ModalSalahButton id="button30" jenis="Koefisien">
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

      <div ref={nextButtonSection} className={`d-flex justify-content-center py-4 ${removeBlurNextButton ? '' : 'blur'}`}>
        <NextButton link={`/materi/bentuk-umum-spltv` + (from ? '?from=materi' : '')}></NextButton>
      </div>
    </Main>
  );
}
