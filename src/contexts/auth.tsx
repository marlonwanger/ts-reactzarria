import React, { createContext } from 'react';
export const AuthContext = createContext({});

function Auth({ children }: any) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export default Auth;
