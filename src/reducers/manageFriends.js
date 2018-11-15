export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      const friendsArrayCopy = [...state.friends]

      const index = friendsArrayCopy.findIndex((arrayItem)=>arrayItem.id ===action.id)

      friendsArrayCopy.splice(index,1)
      return {friends: friendsArrayCopy}
    default:
      return state
  }
}
