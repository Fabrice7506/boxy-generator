import React from 'react'
import { useDispatch } from 'react-redux'
import { updateShadow } from '../../features/shadow'

export default function Range({inputData,ShadowID}) {
    const dispatch = useDispatch()

    console.log(ShadowID);
    function handleImput(e){
        dispatch(
            updateShadow({
                inputNumber: inputData.inputNumber,
                value : e.target.value,
                ShadowID : ShadowID,
                
            })
        )
    }
  return (
    <div className='my-4 '>
        <div className='flex justify-between items-baseline'>
            <p>{inputData.name}</p>
            <div className='flex items-baseline mb-2'>
                <input 
                    type="number"
                    value={inputData.value}
                    onChange={handleImput}
                 className='w-14 h-8 mr-2 border border-gray-200 text-center'  />
                <p>px</p>
            </div>
        </div>
        <div className='relative z-0 w-full flex items-center'>
            <input
             type="range"
             min={inputData.minMax[0]}
             max={inputData.minMax[1]}
             value={inputData.value}
             onChange={handleImput}
             className='w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer'
             />
             <div className='absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-1/2 w-0.5 h-5 bg-gray-300'></div>
        </div>
       
    </div>
  )
}
