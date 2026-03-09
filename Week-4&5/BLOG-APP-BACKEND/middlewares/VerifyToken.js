export const verifytoken = (...role) => {
    return async (req,res,next) => {
        try{
            let token = req.cookies.token;

            if(!token)
                return res.status(401).json({message:"Unauthorized request. Please login."})
        }
        catch(err){
        
    }
    }
    
}