import { AuthState } from './authContext';

type AuthAction = 
| {type:'sigIn'} 
| {type:'changeFavIcon', payload: string} 
| {type:'changeFavColor', payload: string}
| {type:'logout'}
| {type:'changeUsername', payload: string}

export const authReducer = (state: AuthState, action:AuthAction):AuthState =>{

    switch (action.type) {
        case 'sigIn':
            return {
                ...state,
                isLoggin: true,
                username: 'no-username-yet'
            }

            case 'changeFavIcon':
            return{
                ...state,
                favoriteicon: action.payload,
            }

            case 'logout':
                return{
                    ...state,
                    isLoggin: false,
                    username: undefined,
                    favoriteicon: undefined,
                }

                case 'changeUsername':
                return{
                    ...state,
                    username : action.payload
                }

            case 'changeFavColor':
                return{
                    ...state,
                    favoritecolor: action.payload
                }
                
        default:
            return state;
    }

}