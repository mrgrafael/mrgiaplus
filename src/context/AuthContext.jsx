import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const users = [
  { login: 'adm', senha: '9591**', role: 'ADMINISTRADOR' },
  { login: 'financeiro', senha: '9591*', role: 'FINANCEIRO' },
  { login: 'operacional', senha: 'operacional123', role: 'OPERACIONAL' },
  { login: 'consultora', senha: 'consultora123', role: 'CONSULTORA' },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (login, senha) => {
    const foundUser = users.find(u => u.login === login && u.senha === senha);
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};