/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ModalSalahButton(props) {
  const location = useLocation();
  const isLatsol = location.pathname.includes('/latihan-soal/');

  let item = 'buttonStatesFalse';
  if (isLatsol) item = 'buttonStatesFalseLatsol';

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Ambil data buttonStatesFalse dari localStorage saat komponen pertama kali dimuat
    const savedButtonStates = JSON.parse(localStorage.getItem(item)) || {};
    if (savedButtonStates[props.id]) {
      setIsClicked(true);
    }
  }, [props.id]);

  const handleClick = () => {
    setIsClicked(true);

    // Ambil data buttonStatesFalse dari localStorage, update sesuai id, lalu simpan kembali
    const updatedButtonStates = JSON.parse(localStorage.getItem(item)) || {};
    updatedButtonStates[props.id] = true;
    localStorage.setItem(item, JSON.stringify(updatedButtonStates));
  };

  return (
    <>
      <button type="button" className={` ${isClicked ? 'bg-danger-subtle border-danger border disabled' : ''} ${props.className}`} data-bs-toggle="modal" data-bs-target={`#modalSalah${props.jenis}`} onClick={handleClick}>
        {props.children}
      </button>
    </>
  );
}
