import jwt_decode from "jwt-decode";

export const hasExpiratedToken = (token)=>{
    const tokenDecode = jwt_decode(token);
    const expireDate = tokenDecode.exp * 1000;
    const currentDate = new Date().getTime();
    //console.log(currentDate, expireDate)
    if(currentDate > expireDate){
        return true;
    }else {
        return false;
    } 
}