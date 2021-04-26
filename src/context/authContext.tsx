import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";
//DEFINIR COMO LUCE, O QUE INFORMACION TENDRE AQUI
export interface AuthState{

isLoggin:boolean;
username?:string;
favoriteicon?:string;
favoritecolor?:string;

}

//Estado Inicial
export const authInitialState: AuthState={

isLoggin:false,
username: undefined,
favoriteicon: undefined,
favoritecolor: undefined,
}

//Lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps{
    authState: AuthState;
    signIn: ()=> void;
    changeFavoritIcon: (iconName:string) => void;
    changeUsername: (username: string) => void;
    changeFavoritColor: (iconColor: string) => void;
    logout: () => void;
}

//Crear el Contexto
export const AuthContext = createContext({} as AuthContextProps);

//Comonente que es el provedor del estado
export const AuthProvider=({children}: any)=>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type:'sigIn'});
    }

    const changeFavoritIcon = (iconName: string)=>{
        dispatch({type:'changeFavIcon', payload: iconName,});
    }

    const changeFavoritColor = (iconColor: string)=>{
        dispatch({type:'changeFavColor', payload: iconColor});
    }

    const changeUsername = (username:string) =>{
        dispatch({type:'changeUsername', payload: username})
    }

    const logout = () => {
        dispatch({type:'logout'});
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoritIcon,
            changeUsername,
            changeFavoritColor,
        }}>
            { children }
        </AuthContext.Provider>
    )
}