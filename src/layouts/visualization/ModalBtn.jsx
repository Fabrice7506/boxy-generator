import React from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import ModalResult from './ModalResult'

export default function ModalBtn() {
  
  const  [showModal , setShowModal] = useState(false)
  return (
  <>
      <button 
      onClick={()=>setShowModal(!showModal)}
      className='mx-auto mt-2 mb-3 py-1 px-3 text-sm rounded bg-blue-600 
    text-white cursor-pointer hover:bg-blue-700'>
        Code source
    </button>
    {showModal && createPortal(
      <ModalResult 
    closeModal = {()=> setShowModal(!showModal)}
     />,document.body)}
  </>
   
  )
}
