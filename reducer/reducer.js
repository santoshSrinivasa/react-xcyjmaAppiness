const globalstate = {
      details : [], 
}
function reducer(state = globalstate, action) {
  switch (action.type) {
    case "LOGINDETAILS":
      return {
      details : action.searchvalue
      }
      default:
        return state;
  }
}
export default reducer 


