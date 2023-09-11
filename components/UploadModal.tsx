"use client"

import Modal from "@/components/Modal"
import useAuthModal from "@/hooks/useAuthModal"
import { useEffect } from "react";

const UploadModal = () => {
  const {isOpen}= useAuthModal();
  useEffect(()=>{

  },[])
  return (
    <Modal
      title="Upload your musics"
      description=""
      isOpen={isOpen}
      onChange={onChange}>
      
    </Modal>
  )
}

export default UploadModal