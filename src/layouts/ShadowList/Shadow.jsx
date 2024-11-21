import React from 'react'
import { useState,useEffect } from 'react'
import Range from './Range';
import Color from './color';
import chevron from "../../assets/chevron.svg"
import ShadowCheck from './ShadowCheck';
import { useDispatch } from 'react-redux';
import { removeShadow } from '../../features/shadow';

export default function Shadow({panelNumber,shadow}) {
    const [toggleShadow,setToggleShadow] = useState(false) 
    const dispatch = useDispatch()  
    
  const Setting = shadow.input.map((item,index)=>{
    if(item.type === "range"){
      return <Range key ={index}
       inputData = {item} 
       ShadowID = {shadow.id}
       
       />
    }else if(item.type === "color"){
      return <Color key={index} 
      inputData = {item} 
      ShadowID ={shadow.id}
       />
    }
  })

  useEffect(()=>{
    if(panelNumber==1){
        setToggleShadow(true)
    }
  },[])

  return (
    
    <li className='bg-gray-50 border-b border-gray-300'>
        <button
        onClick={()=>setToggleShadow(!toggleShadow)} 
        className='flex justify-between items-center hover:bg-gray-100 w-full p-3 pr-5'>
            <span>shadow {panelNumber} </span>
            <img src={chevron} 
            style={{
                transform: `${
                toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`
            }}
            alt=""
            className='font-bold w-5' />
        </button>
        {toggleShadow &&
        <>
            <div className='flex items-end px-6 pt-4'>
              <ShadowCheck name="active" ShadowID = {shadow.id} />
              <ShadowCheck name="inset" ShadowID = {shadow.id} />

                <button 
                onClick={()=>dispatch(removeShadow({ShadowID : shadow.id}))}
                className='ml-auto text-sm bg-red-600 text-white hover:bg-red-700
                py-1 px-3 rounded'>
                    Remove
                </button>
            </div>
            <div className='px-6 py-4'>
                {Setting}
            </div>
        </>
        }
    </li>
  )
}
