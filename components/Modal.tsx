/* eslint-disable react/display-name */
'use client';

import { IoMdClose } from 'react-icons/io';
import { ForwardedRef, forwardRef } from 'react';
import { useModalState } from './ModalProvider';

const Modal = forwardRef((_, ref: ForwardedRef<HTMLDialogElement>) => {
  const state = useModalState(); //현재 모달 상태
  const handleClose = (e: React.UIEvent<HTMLButtonElement>) => {
    e.preventDefault();
    state.modalRef.current?.close();
  };
  return (
    <dialog ref={ref} className="border rounded-md bg-neutral-800 border-1 ">
      <div className="flex flex-col gap-2 p-4 ">
        <span className="mb-4 font-bold text-center text-l">{state.title}</span>
        <span className="mb-5 text-sm leading-normal text-center">{state.message}</span>
        <div className="flex justify-end gap-4 text-base ">
          <button
            className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rouned-full focus:outline-none"
            onClick={handleClose}
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default Modal;
