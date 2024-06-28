import jwt from 'jsonwebtoken';

export const jwt_validator= (req,res)=>{
    const token=req.cookies.jwtToken;
    // console.log(token);
    const payload = jwt.verify(token,process.env.SECRET_KEY);
    if (payload) {
        // console.log(payload)
        return true;
    } 
    return false;
}