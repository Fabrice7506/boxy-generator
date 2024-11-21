import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateCheckBox } from '../../features/shadow'

export default function ShadowCheck({name,ShadowID}) {

    const dispatch = useDispatch()
    const shadowCheck = useSelector(state => state.shadows.find(check=>check.id === ShadowID))
    
    console.log(shadowCheck)
    
  return (
    <>
        <input
         type="checkbox" 
         onClick={()=>dispatch(updateCheckBox({name,ShadowID}))} 
        id={`checkbox-${name}-${ShadowID}`} 
        className='h-4 w-4 border-gray-300 rounded mr-2'
        checked = {shadowCheck[name]}
        />
        <label 
        className='leading-4 mr-4'
        htmlFor={`checkbox-${name}-${ShadowID}`}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
    </>
  )
}
