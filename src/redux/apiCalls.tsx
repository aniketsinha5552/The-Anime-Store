import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async ( dispatch:any,user:any) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}

