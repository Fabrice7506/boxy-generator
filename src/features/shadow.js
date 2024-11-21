import { createSlice, current } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { random } from "nanoid/async";

const initialState = [
    {
        id :nanoid(8),
        active : true,
        inset : false, 
        input : [
          {
            inputNumber:1,
            name:"Horizontal offset",
            value : 0,
            type : "range",
            minMax : [-250,250]
          },
          {
            inputNumber:2,
            name:"vertical offset",
            value : 10,
            type : "range",
            minMax : [-250,250]
          },
          {
            inputNumber:3,
            name:"blur radius",
            value : 15,
            type : "range",
            minMax : [0,250]
          },
          {
            inputNumber:4,
            name:"spread offset",
            value : -3,
            type : "range",
            minMax : [-250,250]
          },
          {
            inputNumber:5,
            name:"color",
            value : "#4f4f4f",
            type : "color",
          }
        ]
    }
]


export const ShadowSlice = createSlice(
    {
        name : "shadow",
        initialState :initialState,
        reducers : {
            addShadow : (state,action) =>{
                state.push(
                  {
                    id :nanoid(8),
                    active : true,
                    inset : false, 
                    input : [
                      {
                        inputNumber:1,
                        name:"Horizontal offset",
                        value : 0,
                        type : "range",
                        minMax : [-250,250]
                      },
                      {
                        inputNumber:2,
                        name:"vertical offset",
                        value : 10,
                        type : "range",
                        minMax : [-250,250]
                      },
                      {
                        inputNumber:3,
                        name:"blur radius",
                        value : 15,
                        type : "range",
                        minMax : [0,250]
                      },
                      {
                        inputNumber:4,
                        name:"spread offset",
                        value : -3,
                        type : "range",
                        minMax : [-250,250]
                      },
                      {
                        inputNumber:5,
                        name:"color",
                        value : "#4f4f4f",
                        type : "color",
                      }
                    ]
                }
                )
            },
            removeShadow : (state,action) =>{
              const index = state.findIndex(shadow => shadow.id === action.payload.ShadowID);
              if (index !== -1) {
                state.splice(index, 1); // Supprime l'élément à l'index trouvé
              }
            },
            updateShadow : (state,action) =>{
             const item = state.find(shadow => shadow.id == action.payload.ShadowID)

            const currentInput = item.input.find(input => input.inputNumber === action.payload.inputNumber)
            
            currentInput.value = action.payload.value
            },
            updateCheckBox : (state,action) =>{
              const currentCheck = state.find(shadow => shadow.id === action.payload.ShadowID)
              currentCheck[action.payload.name] = !currentCheck[action.payload.name]
              
            },
        }
    }
)
export const {addShadow,removeShadow,updateCheckBox,updateShadow} = ShadowSlice.actions
export default ShadowSlice.reducer