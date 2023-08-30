// import * as Dialog from '@radix-ui/react-dialog';
// import { IoMdClose } from 'react-icons/io';

// interface ModalProps {
//   isOpen: boolean;
//   onChange: (open: boolean) => void;
//   /*get boolean type param , return void  */
//   title: string;
//   description: string;
//   children: React.ReactNode;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onChange, title, description, children }) => {
//   return (
//     <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-neutral-900/90 backgrop-blur-sm" />
//         <Dialog.Content className="fixed border  border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none">
//           <Dialog.Title className="mb-4 text-xl font-bold text-center">{title}</Dialog.Title>
//           <Dialog.Description className="mb-5 text-sm leading-normal text-center">
//             {description}
//           </Dialog.Description>
//           <div>
//             {children} {/*폼 들어갈 곳.*/}
//           </div>
//           <Dialog.Close asChild>
//             <button className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rouned-full focus:outline-none">
//               <IoMdClose />
//             </button>
//           </Dialog.Close>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default Modal;
