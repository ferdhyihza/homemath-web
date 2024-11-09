/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export default function ModalSalahButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Ambil data buttonStatesFalse dari localStorage saat komponen pertama kali dimuat
    const savedButtonStates = JSON.parse(localStorage.getItem('buttonStatesFalse')) || {};
    if (savedButtonStates[props.id]) {
      setIsClicked(true);
    }
  }, [props.id]);

  const handleClick = () => {
    setIsClicked(true);

    // Ambil data buttonStatesFalse dari localStorage, update sesuai id, lalu simpan kembali
    const updatedButtonStates = JSON.parse(localStorage.getItem('buttonStatesFalse')) || {};
    updatedButtonStates[props.id] = true;
    localStorage.setItem('buttonStatesFalse', JSON.stringify(updatedButtonStates));
  };

  return (
    <>
      <button type="button" className={` ${isClicked ? 'bg-danger-subtle border-danger border disabled' : ''}`} data-bs-toggle="modal" data-bs-target={`#modalSalah${props.jenis}`} onClick={handleClick}>
        {props.children}
      </button>
    </>
  );
}
