import axios from 'axios';
import {create} from 'zustand'

export const useAuth = create((set)=>({
    currentUser:null,
    loading:false,
    isAuthenticated:false,
    error:null,
    login:async(userCredObj) =>{
        
        try{
            //set loading true
            set({loading:true,error:null});
            //male api call

            const res = await axios.post("http://localhost:3000/common-api/login",userCredObj,{withCredentials:true});
            console.log(userCredObj)

            console.log("res is:",res);
            

            //update state
            set({
                loading:false,
                isAuthenticated:true,
                currentUser:res.data.payload,
            });
            

        }

        catch(err){
            console.log("err is",);
            set({
                loading :false,
                isAuthenticated:false,
                currentUser:null,
                error:err.response?.data.err,
            })
        }
    }
    
}))

