export function manageFriends(state={
  friends:[]
}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {...state, friends: [
        ...state.friends,
        action.friend
      ]
      }

      break;
      case "REMOVE_FRIEND":
        let friend = state.friends.find((friend)=>{
          return friend.id === action.id
        })
        let index = state.friends.indexOf(friend)

        return {...state, friends:[
          ...state.friends.slice(0,index),
          ...state.friends.slice(index +1)
        ]}
        break;
    default:
      return state
  }
}

// manageFriends
// adds the friend when type is 'ADD_FRIEND' and the action has a
// friend property with a name, hometown and id:

      // Error: Expected { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 } ],
      // name: 'Joe', hometown: 'Boston', id: 101 }
      // to equal { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 },
      //  { name: 'Joe', hometown: 'Boston', id: 101 } ] }
