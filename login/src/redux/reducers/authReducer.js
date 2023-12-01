// authReducer.js
const initialState = {
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: { email: action.payload.email },
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  