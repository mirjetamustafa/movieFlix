export const initialState = {
  myList: [],
  user: null,
}

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TO_LIST':
      return { ...state, myList: [...state.myList, action.item] }
    case 'REMOVE_FROM_LIST':
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.id),
      }
    default:
      return state
  }
}

export default reducer
