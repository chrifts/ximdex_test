import { createStore } from 'redux'

const initialState = {
    texts: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEXT': {
      return {
        ...state,
        texts: [
          ...state.texts,
          action.payload
        ]
      }
    }
    default:
      break;
  }
  return state
}

const store = createStore(reducer)

export default store