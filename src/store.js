import { configureStore } from "@reduxjs/toolkit"
import shadows from './features/shadow'
import BoxProperties from "./features/BoxProperties"

export const store = configureStore({
    reducer : {
        shadows,
        BoxProperties
    }
})