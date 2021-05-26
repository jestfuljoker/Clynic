/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface SignInCredentials {
    email: string;
    password: string;
}
interface AuthState {
    token: string;
    user: object;
}
interface AuthContextData {
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Clynic:token');
        const user = localStorage.getItem('@Clynic:user');

        if (token && user) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@Clynic:token', token);
        localStorage.setItem('@Clynic:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };
