"use client";
import React, { useReducer, useContext, createContext, Dispatch, useRef } from 'react';
import Modal from '@/components/Modal';

//상태를 위한 타입
type ModalState = {
  title: string;
  message: string;
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
};
//모든 액션들을 위한 타입
export type ModalActionsType = 'OPEN_MODAL' | 'CLOSE_MODAL';
export type ModalActions = { type: ModalActionsType; payload?: any };

//디스패치를 위한 타입
export type ModalDispatch = Dispatch<ModalActions>;

//Context생성
//추후 hooks함수가 반환하는 값이 유효하지않으면 에러를 발생시키도록 하기 위해 null체킹
const ModalStateContext = createContext<ModalState | null>(null);
const ModalDispatchContext = createContext<ModalDispatch | null>(null);

function ModalReducer(state: ModalState, action: ModalActions): ModalState {
  console.log(action.type);
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        title: action.payload.title,
        message: action.payload.message,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        title: '',
        message: '',
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const initialModalState: ModalState = {
    title: '',
    message: '',
    modalRef: useRef<HTMLDialogElement | null>(null),
  };
  const [modalState, modalDispatch] = useReducer(ModalReducer, initialModalState);
  return (
    <ModalDispatchContext.Provider value={modalDispatch}>
      <ModalStateContext.Provider value={modalState}>
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
}

export function useModalState() {
  const state = useContext(ModalStateContext);
  if (!state) throw new Error('Cannot find Modal Provider');
  return state;
}
export function useModalDispatch() {
  const dispatch = useContext(ModalDispatchContext);
  if (!dispatch) throw new Error('Cannot find ModalProvider');
  return dispatch;
}
