import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';

export default function PengantarSPLTV1() {
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
      <div className="bg-blue-subtle mb-3 rounded-4 p-3 border border-blue border-2 text-center">
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0">Mana yang merupakan variabel?</p>
        <div className="row justify-content-between px-3">
          <div className="col text-start">
            <p className="fw-semibold">Persamaan 1</p>
            <div className="persamaan">
              <button>2</button>
              <button>x</button>
              <button>+</button>
              <button>3</button>
              <button>y</button>
              <button>=</button>
              <button>7</button>
            </div>
          </div>
          <div className="col text-end">
            <p className="fw-semibold">Persamaan 2</p>
            <div className="persamaan">
              <button>5</button>
              <button>x</button>
              <button>+</button>
              <button>1</button>
              <button>y</button>
              <button>=</button>
              <button>11</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-subtle mb-3 rounded-4 p-3 border border-blue border-2 text-center">
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0">Mana yang merupakan konstanta?</p>
        <div className="row justify-content-between px-3">
          <div className="col text-start">
            <p className="fw-semibold">Persamaan 1</p>
            <div className="persamaan">
              <button>2</button>
              <button>x</button>
              <button>+</button>
              <button>3</button>
              <button>y</button>
              <button>=</button>
              <button>7</button>
            </div>
          </div>
          <div className="col text-end">
            <p className="fw-semibold">Persamaan 2</p>
            <div className="persamaan">
              <button>5</button>
              <button>x</button>
              <button>+</button>
              <button>1</button>
              <button>y</button>
              <button>=</button>
              <button>11</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-subtle mb-3 rounded-4 p-3 border border-blue border-2 text-center">
        <p className="bg-darkblue p-2 px-3 rounded-3 d-inline-block fw-semibold mb-0">Mana yang merupakan koefisien?</p>
        <div className="row justify-content-between px-3">
          <div className="col text-start">
            <p className="fw-semibold">Persamaan 1</p>
            <div className="persamaan">
              <button>2</button>
              <button>x</button>
              <button>+</button>
              <button>3</button>
              <button>y</button>
              <button>=</button>
              <button>7</button>
            </div>
          </div>
          <div className="col text-end">
            <p className="fw-semibold">Persamaan 2</p>
            <div className="persamaan">
              <button>5</button>
              <button>x</button>
              <button>+</button>
              <button>1</button>
              <button>y</button>
              <button>=</button>
              <button>11</button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center py-4">
        <NextButton link="/latihan-soal" />
      </div>
    </Main>
  );
}
