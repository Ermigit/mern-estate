import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
const signup= async (req,res)=>{

 const {username, email, password} =req.body;
 const hashedPassword = bcryptjs.hashSync(password, 10);
 const newUser =  new User({username, email, password:hashedPassword});
try {
   await newUser.save();
   res.status(201).json("You saved new user!");  // Find where this messese gone on the browser
   
} catch (error) {
   res.status(500).json("User Not created!");
}

}

export default signup;