import React, { useReducer, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'

const initialState = {
  count: 0
}

const counterContext = React.createContext()

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 }
    case 'DECREASE':
      return { count: state.count - 1 }
    default:
      return state.count
  }
}

const Counter = () => {
  const { state, dispatch } = useContext(counterContext)

  return (
    <div>
      Count: {state.count} 
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
    </div>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <div id="app">
      <CounterContext.Provider value={{state, dispatch}}>
        <Counter />
      </CounterContext.Provider>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)