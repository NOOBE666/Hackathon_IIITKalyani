import jwt from 'jsonwebtoken';

export const jwt_validator= (req,res)=>{
    const token=req.cookies.jwtToken;
    const payload = jwt.verify(token,process.env.SECRET_KEY);
    if (payload) {
        return true;
    } 
    return false;
}