var user=[];

class ProductModel{
    addUser(objUser){
        // console.log(objUser)
        let Userid=user.length;
        objUser["id"]=Userid;
        user.push(objUser);
        // console.log(user);
    }
    findUser(objUser){
        const present=user.find(p=>p.userEmail==objUser.userEmail && p.userPassword==objUser.userPassword);
        // console.log(present);
        return present;
    }
}
export default ProductModel;