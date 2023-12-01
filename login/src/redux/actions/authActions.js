// authActions.js
export const login = (email, password) => ({
    type: 'LOGIN',
    payload: { email, password },
  });
  