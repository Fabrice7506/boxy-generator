import React from 'react'
import getBoxShadowValue from '../../function/getBoxShadowValue'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import photo from "../../assets/facebook.jpg"

export default function ModalResult({closeModal}) {
  const shadow = useSelector(state => state.shadows)

  useEffect(()=>{
    document.body.style.overflowY = "hidden"

    return () => document.body.style.overflowY = 'auto'
  })

  let animation = false

  function handleCopy(e){
    if(!animation){
      animation = true
      e.target.textContent = "copied ! "

      setTimeout(() => {
        e.target.textContent = "copy"
        animation = false
      },1250)
   }
   navigator.clipboard.writeText(getBoxShadowValue(shadow))
  }
  return (
    <div
    onClick={()=>closeModal()}
     className='fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75'>
      <div
        onClick={e => e.stopPropagation()}
        className='max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]'
      >
        <div className='flex items-end mb-5'>
          <p className='font-semibold mr-5'>Voici le code</p>
          <button 
          onClick={handleCopy}
          className='ml-auto mr-2 text-sm bg-blue-600 text-white 
          hover:bg-blue-700 px-3 py-2 rounded'>Copy</button>
          <button
          onClick={()=>closeModal()}
           className=' mr-2 text-sm bg-red-600 text-white 
          hover:bg-red-700 px-3 py-2 rounded'>close</button>
        </div>
        <p className='rounded bg-gray-100 p-5'>
          <span className='font-semibold'>box-shadow : {getBoxShadowValue(shadow)} </span>
          <img src={photo}  className="mt-4" alt="" />
        </p>
      </div>
    </div>
  )
}
