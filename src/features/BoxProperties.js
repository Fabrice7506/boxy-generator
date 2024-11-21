import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { random } from "nanoid/async";

const initialState = [
          {
            inputNumber:1,
            name:"border radius",
            value : 25,
            type : "range",
            slice : "boxProperties",
            minMax : [0,250]
          },
          {
            inputNumber:2,
            name:"height ",
            value : 250,
            slice : "boxProperties",
            type : "range",
            minMax : [0,500]
          },
          {
            inputNumber:3,
            name:"width",
            value : 250,
            type : "range",
            slice : "boxProperties",
            minMax : [0,500]
          },
          {
            inputNumber:4,
            name:"background Color",
            value : "#fff",
            type : "color",
          },
     ]


export const BoxSlice = createSlice(
    {
        name : "BoxProperties",
        initialState :initialState,
        reducers : {
            updateBoxValue : (state,action) =>{
              
              const item =  state.find(el => el.inputNumber === action.payload.inputNumber) 
              item.value = action.payload.value
              
            },
        }
    }
)
export const {updateBoxValue} = BoxSlice.actions
export default BoxSlice.reducer