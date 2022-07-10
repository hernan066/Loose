import { hasExpiratedToken } from "../api/token";


export const authFetch = async (token, url, params, logout)=>{
    if(!token){
        //usuario no logueado
        logout();
    }else{
        if(hasExpiratedToken(token)){
            //Token caducado
            logout();
        }else{
            //token correcto
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                const resp = await fetch(url, paramsTemp);
                const result = await resp.json();
                return result;
            } catch (error) {
                return error;
            }
        }
    }
  };