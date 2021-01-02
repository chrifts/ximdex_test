import { createStore } from 'redux'

const initialState = {
    texts: [],
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_TEXT') {
    return Object.assign({}, state, {
        texts: state.texts.concat(action.payload)
    })
  }

  return state
}

const store = createStore(reducer)

export default store