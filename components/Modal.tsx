'use client';

import * as Dialog from '@radix-ui/react-dialog';
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
    <dialog ref={ref} className="border border-1">
      <div className="flex flex-col gap-2 p-4">
        <span className="text-lg">{state.title.toUpperCase()}</span>
        <span >{state.message}</span>
        
        <div className="flex justify-end gap-4 text-base">
          <button
            className="px-2 py-1 border border-1 border-gray-800 bg-slate-500 text-white hover:bg-slate-500/[0.8]"
            onClick={handleClose}
          >
            취소
          </button>
          <button
            className="px-2 py-1 border border-1 border-gray-800 bg-slate-500 text-white hover:bg-slate-500/[0.8]"
            onClick={handleClose}
          >
            확인
          </button>
        </div>
      </div>
      {/* <Dialog.Root>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-neutral-900/90 backgrop-blur-sm" />
          <Dialog.Content className="fixed border  border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none">
            <Dialog.Title className="mb-4 text-xl font-bold text-center">
              {state.title}
            </Dialog.Title>
            <Dialog.Description className="mb-5 text-sm leading-normal text-center">
              {state.message}
            </Dialog.Description>
            <Dialog.Close asChild>
              <button
                onClick={handleClose}
                className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rouned-full focus:outline-none"
              >
                <IoMdClose />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root> */}
    </dialog>
  );
});

export default Modal;
