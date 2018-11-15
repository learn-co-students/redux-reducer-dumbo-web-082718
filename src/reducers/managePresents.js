let initialState = {
  numberOfPresents:0
}

export function managePresents(initialState, action){

  switch (action.type) {
    case 'INCREASE':
      let newNum = initialState.numberOfPresents+1;
      return {...initialState, numberOfPresents: initialState.numberOfPresents + 1
      }
      break;
    default:
      return initialState
  }

}
