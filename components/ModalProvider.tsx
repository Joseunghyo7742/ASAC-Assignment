// 'use client'

// import ModalProvider, {
//   ModalContext,
// } from '@/app/2-global-state/modal-provider'
// import { useContext } from 'react'
// import { useRouter } from 'next/navigation'

// const NestedReactComponent = () => {
//   const { show, hide } = useContext(ModalContext)
//   const router = useRouter()
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
//       <button
//         onClick={() =>
//           show({
//             title: '안녕',
//             description: '세상',
//             confirmButton: '화화확인',
//             cancelButton: '취취취소',
//             confirmCallback: () => {
//               router.push('/')
//             },
//             useCancelButton: false,
//           })
//         }
//       >
//         켜기 A
//       </button>
//       <button onClick={() => show({ title: 'Hello', description: 'World' })}>
//         켜기 B
//       </button>
//       <button
//         onClick={() =>
//           show({ title: '----', description: 'ㅁㄴㅇㅁ너ㅏㅗ어ㅏ' })
//         }
//       >
//         켜기 C
//       </button>
//       <button
//         onClick={() =>
//           show({ title: '129ㅗㄷㅁㅈ', description: 'ㅁㄴ우ㅏㅣㅁ누ㅏㅣ' })
//         }
//       >
//         켜기 D
//       </button>
//       <button onClick={() => hide()}>끄기</button>
//     </div>
//   )
// }

// export default function GlobalState() {
//   const { show, hide } = useContext(ModalContext)
//   return (
//     <main>
//       {/* <button onClick={() => show()}>켜기</button> */}
//       {/* <button onClick={() => hide()}>끄기</button> */}
//       <ModalProvider>
//         <NestedReactComponent />
//       </ModalProvider>
//     </main>
//   )
// }

// // const title = 'Text in a modal'
// // const description =
// //   'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
// import { Box, Button, Modal, Typography } from '@mui/material'
// import { createContext, useState } from 'react'

// // Default Value
// export const ModalContext = createContext({
//   show: (param: ModalContent) => {},
//   hide: () => {},
// })

// interface ModalProviderProps {
//   children: React.ReactNode
// }

// interface Modal extends ModalContent {
//   show: boolean
// }

// interface ModalContent {
//   title?: string
//   description?: string
//   confirmButton?: string
//   cancelButton?: string
//   confirmCallback?: () => void
//   cancelCallback?: () => void
//   useConfirmButton?: boolean
//   useCancelButton?: boolean
// }
// export default function ModalProvider({ children }: ModalProviderProps) {
//   const [modal, setModal] = useState<Modal>({
//     show: false,
//   })
//   return (
//     // Initial Value
//     <ModalContext.Provider
//       value={{
//         show: (param: ModalContent) => {
//           setModal({
//             show: true,
//             title: param.title,
//             description: param.description,
//             confirmButton: param.confirmButton,
//             cancelButton: param.cancelButton,
//             confirmCallback: param.confirmCallback,
//             cancelCallback: param.cancelCallback,
//             useConfirmButton: param.useConfirmButton ?? true,
//             useCancelButton: param.useCancelButton ?? true,
//           })
//         },
//         hide: () => {
//           setModal({ show: false })
//         },
//       }}
//     >
//       {children}
//       <Modal
//         open={modal.show}
//         onClose={() => setModal({ show: false })}
//         sx={{
//           position: 'fixed',
//           top: '50px',
//           left: '50px',
//           width: '300px',
//           minHeight: '100px',
//           backgroundColor: 'white',
//         }}
//       >
//         ....
//       </Modal>
//     </ModalContext.Provider>
//   )
// }