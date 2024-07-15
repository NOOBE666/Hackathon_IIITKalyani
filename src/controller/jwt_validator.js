import jwt from 'jsonwebtoken'
export const jwt_validator= (req,res,next)=>{
    const token=req.cookies.jwtToken;
    //  console.log(token);
    if (token) {
        var payload = jwt.verify(token,process.env.SECRET_KEY);
    }
    if (!payload) {
        res.clearCookie('jwtToken');
    } 
    next();
}