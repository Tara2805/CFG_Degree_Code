import { createSlice } from '@reduxjs/toolkit'

export const counterReducer = createSlice({
    name: 'counter',
    initialState: {
      value: 0,
      listOfNames: ["Nneka"]
    },
    reducers: {
        increment: (state) => {
            console.log(" clicked to add ")
            state.value += 1 
            console.log(state.value)
        },
        decrement: (state) =>{
            state.value -=1 
        },
        incrementByAmount: (state, action) => {
            console.log(action.payload.value)
            state.value += action.payload.newStuff
        },
        updateList: (state, action) =>{
            
           return {
            ...state,
            listOfNames: [...state.listOfNames, action.payload]
           }
        },
        removeNamefromList : (state, action) =>{
            return {
                ...state,
                listOfNames: state.listOfNames.filter(item => item !== action.payload)
            }
        }



    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateList,removeNamefromList } = counterReducer.actions

export default counterReducer.reducer