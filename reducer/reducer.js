const globalstate = {
      details : "", 
     data : {
       details : ""
      }
}
function reducer(state = globalstate, action) {
  switch (action.type) {
    case "LOGINDETAILS":
      console.log("state is",state);
      console.log("action-->", action.searchvalue)

      return {
        ...state,
      data :{details : action.searchvalue} 
      }
      default:
        return state;
  }
}
export default reducer 


