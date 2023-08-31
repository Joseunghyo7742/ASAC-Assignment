// import { useContext } from 'react';
// import ModalProvider from './ModalProvider';

// const NestedReactComponent = () => {
//   const { show, hide } = useContext(ModalContext);
//   return (
//     <>
//       <div className="red bg-red">
//         <button className="bg-red" onClick={() => show()}>
//           켜기(Provider로 감싸진)
//         </button>
//         <button className="bg-red" onClick={() => hide()}>
//           끄기(Provider로 감싸진)
//         </button>
//       </div>
//     </>
//   );
// };
// export default function GlobalState() {
//   const { show, hide } = useContext(ModalContext);
//   return (
//     <main>
//       <div>
//         <button onClick={() => show()}>켜기 </button>
//         <button onClick={() => hide()}>끄기 </button>
//       </div>
//       <ModalProvider>
//         <NestedReactComponent />
//       </ModalProvider>
//     </main>
//   );
// }
