// import { createContext,ReactNode, useState } from 'react';

// interface ModalProps {
//   isOpen: boolean;
//   onSubmit?: () => unknown;
//   title: string;
//   description: string;
//   children?: ReactNode;
// }

// //Context생성: 데이터 고유를 위한 컨테이너 역할 
// const ModalContext = createContext<{
//   modalProps: ModalProps;
//   openModal: (modalProps: ModalProps) => void;
//   closeModal: () => void;
// }>({} as any);


// export const ModalContextProvider: React.FC<{children:ReactNode}>=>({
//   children,
// })=>{
//   const[isOpen,setIsOpen] = useState(false);
//   const [modalData, setModalData]= useState<ModalProps>({});
// }
  