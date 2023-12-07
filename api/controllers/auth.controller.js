import User from '../models/user.model.js'
const signup= (req,res)=>{
   const {username, email ,password} = req.body;
   const newUser = new User ({username, email, password});
   newUser.save();

   console.log(req.body);

}
export default signup;