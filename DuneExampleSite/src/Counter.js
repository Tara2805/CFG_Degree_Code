import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, updateList, removeNamefromList } from './CounterSlice'


export function Counter() {
const count = useSelector((state) => 
    state.counter.value
)

const names = useSelector((state) => state.counter.listOfNames)

const incrementAmount = {value: 2, newStuff: 5}
const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment()) }>
          Increment
        </button>
       
       <p> {count}</p>
       
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
         >
          Decrement
        </button>

        <button
          aria-label="Add Amount"
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
         >
          incrementByAmount
        </button>

        <button
          aria-label="Add name"
          onClick={() => dispatch(updateList("Bob"))}
         >
          Add name
        </button>

        <button
          aria-label="remove name"
          onClick={() => dispatch(removeNamefromList("Bob"))}
         >
          remove name
        </button>

        <p> {names}</p>
      </div>
    </div>
  )
}