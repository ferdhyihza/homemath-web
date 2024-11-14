import { useEffect, useRef, useState } from 'react';
import ModalBenarButton from '../../components/buttons/ModalBenarButton';
import ModalSalahButton from '../../components/buttons/ModalSalahButton';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import ModalBenar from '../../components/modals/ModalBenar';
import ModalSalah from '../../components/modals/ModalSalah';

export default function BentukUmumSPLTV() {
  const [removeBlurNextButton, setRemoveBlurNextButton] = useState(false);
  const [isModalBenarOpen, setIsModalBenarOpen] = useState(false);

  const nextButtonSection = useRef(null);
  const [isNextButtonSectionFocus, setIsNextButtonSectionFocus] = useState(false);

  const handleButtonClick = () => {
    const buttonStates = JSON.parse(localStorage.getItem('buttonStatesTrue')) || {};
    const trueButtonsCount = ['button31', 'button33', 'button37'].filter(buttonId => buttonStates[buttonId]).length;
    const shouldRemoveBlurNextButton = trueButtonsCount >= 3;
    const shouldOpenModalBenar = trueButtonsCount >= 2;

    if (shouldRemoveBlurNextButton) {
      setRemoveBlurNextButton(true);
      setIsNextButtonSectionFocus(true);
      localStorage.removeItem('buttonStatesFalse');
    }
    if (shouldOpenModalBenar) setIsModalBenarOpen(true);
  };

  useEffect(() => {
    const sessionData = JSON.parse(localStorage.getItem('sessionData'));
    if (isNextButtonSectionFocus && nextButtonSection.current && !sessionData.BentukUmumSPLTV) {
      nextButtonSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setIsNextButtonSectionFocus(false); // reset ke false setelah autoscroll
      const newSessionData = {
        ...sessionData,
        BentukUmumSPLTV: true,
      };
      localStorage.setItem('sessionData', JSON.stringify(newSessionData));
    }
    handleButtonClick(); // Check condition on component mount
  }, [isNextButtonSectionFocus]);

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">Bentuk Umum SPLTV</h3>
      <p>Jika kalian telah mengingat dan memahami unsur-unsur yang terdapat pada sistem persamaan linear, mari kita lanjutkan untuk memhami apa dan bagaimana Sistem Persamaan Linear Tiga Variabel (SPLTV).</p>
      <p>
        Sistem Persamaan Linear Tiga Variabel (SPLTV) merupakan Kumpulan dari tiga persamaan linear yang setiap persamaannya memiliki tiga variabel. SPLTV juga merupakan konsep ilmu matematika yang digunakan untuk menyelesaikan permasalahan
        yang tidak dapat diselesaikan dengan persamaan linear satu variabel maupun dua variabel.
      </p>
      <p>Berdasarkan penjelasan di atas, kalian dapat mengetahui bahwa sistem persamaan linear tiga variabel (SPLTV) memiliki bentuk umum sebagai berikut:</p>
      <div className="bg-darkblue p-4 rounded-4 my-4" style={{ margin: '0 96px' }}>
        <div className="bg-blue-subtle p-4 rounded-4">
          <div className="container text-black bg-lightblue rounded-4 text-center p-4">
            <h6 className="fw-bold">Bentuk Umum SPLTV</h6>
            <p className="mb-0">
              a<sub>1</sub>x + b<sub>1</sub>y + c<sub>1</sub>z = d<sub>1</sub> <br />
            </p>
            <p className="mb-0">
              a<sub>2</sub>x + b<sub>2</sub>y + c<sub>2</sub>z = d<sub>2</sub> <br />
            </p>
            <p className="mb-0">
              a<sub>3</sub>x + b<sub>3</sub>y + c<sub>3</sub>z = d<sub>3</sub> <br />
            </p>
            <p className="mb-0">
              dengan a<sub>i</sub>,b<sub>i</sub>,c<sub>i</sub>,d<sub>i</sub>∈ R,i = 1,2,3
            </p>
          </div>
        </div>
      </div>
      <p>
        Jika melihat dari bentuk umum tersebut, mana saja yang merupakan variabel, koefisien, dan konstanta? <br />
        Coba pilih mana pernyataan berikut yang tepat.
      </p>
      <div className={`bg-blue-subtle p-4 rounded-4 my-4 ${removeBlurNextButton ? 'disabled' : ''}`} style={{ margin: '0 96px' }}>
        <div className="container bg-darkblue rounded-4 text-center p-4">
          <p className="">Mana saja yang tepat dari pernyataan di bawah ini?</p>
          <div className="row text-black gap-5 px-5 mb-4">
            <ModalBenarButton onButtonClick={handleButtonClick} id="button31" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>x, y, dan z</h5>
              <p className="mb-0">merupakan variabel</p>
            </ModalBenarButton>
            <ModalSalahButton id="button32" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>
                x, y, d<sub>1</sub>, d<sub>2</sub>
              </h5>
              <p className="mb-0">merupakan variabel</p>
            </ModalSalahButton>
            <ModalBenarButton onButtonClick={handleButtonClick} id="button33" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>
                d<sub>1</sub>, d<sub>2</sub>, d<sub>3</sub>
              </h5>
              <p className="mb-0">merupakan konstanta</p>
            </ModalBenarButton>
          </div>
          <div className="row text-black gap-5 px-5 mb-4">
            <ModalSalahButton id="button34" className="col bg-lightblue rounded-4 p-2 ms-5 align-self-center">
              <p className="mb-0">terdapat 8 variabel, yaitu</p>
              <h5>
                a<sub>1</sub>, b<sub>1</sub>, c<sub>1</sub>, a<sub>2</sub>, b<sub>2</sub>, c<sub>2</sub>, a<sub>3</sub>, b<sub>3</sub>, dan c<sub>3</sub>,
              </h5>
            </ModalSalahButton>
            <ModalSalahButton id="button35" className="col bg-lightblue rounded-4 p-2 me-5 align-self-center">
              <p className="mb-0">terdapat 3 konstanta, yaitu</p>
              <h5>x, y, dan z</h5>
            </ModalSalahButton>
          </div>
          <div className="row text-black gap-5 px-5 mb-4">
            <ModalSalahButton id="button36" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>
                c<sub>3</sub>, z, a<sub>1</sub>, b<sub>1</sub>
              </h5>
              <p className="mb-0">merupakan koefisien</p>
            </ModalSalahButton>
            <ModalBenarButton onButtonClick={handleButtonClick} id="button37" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>
                a<sub>1</sub>, b<sub>1</sub>, c<sub>1</sub>, a<sub>2</sub>, b<sub>2</sub>, c<sub>2</sub>, a<sub>3</sub>, b<sub>3</sub>, dan c<sub>3</sub>,
              </h5>
              <p className="mb-0">merupakan koefisien</p>
            </ModalBenarButton>
            <ModalSalahButton id="button38" className="col bg-lightblue rounded-4 p-2 align-self-center">
              <h5>
                a<sub>2</sub>, b<sub>2</sub>, c<sub>2</sub>
              </h5>
              <p className="mb-0">merupakan konstanta</p>
            </ModalSalahButton>
          </div>
        </div>
      </div>
      {isModalBenarOpen && <ModalBenar>Bagaimana, mudah bukan mengidentifikasinya? Jika kalian sudah memahami unsur-unsur dan bentuk umum SPLTV, akan mudah untuk mempelajari tahap selanjutnya...</ModalBenar>}

      <ModalSalah>
        <b>Variabel</b> merupakan simbol atau huruf suatu nilai yang besarnya belum diketahui secara pasti <br />
        <b>Koefisien</b> merupakan suatu bilangan yang menjelaskan banyaknya jumlah variabel <br />
        <b>Konstanta</b> merupakan nilai tetap yang tidak diikuti oleh variabel di belakangnya
      </ModalSalah>

      <div ref={nextButtonSection} className={`d-flex justify-content-center py-4 ${removeBlurNextButton ? '' : 'blur'}`}>
        <NextButton link="/materi/bentuk-umum-spltv-2" />
      </div>
    </Main>
  );
}
