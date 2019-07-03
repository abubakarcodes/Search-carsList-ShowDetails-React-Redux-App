export default function(state = {}, action) {
 switch (action.type) {
   case "Search_Cars":
    return{
      ...state,
      list: action.payload
    }
    case "Car_Details":
      return{
        ...state,
        details: action.payload
      }
      case "clear_details":
        return{
          ...state,
          details: action.payload
        }
   default:
     return state;
 }
}
