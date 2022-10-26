export default (state = {}, action) => {
    switch (action.type) {
     case 'APP_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }