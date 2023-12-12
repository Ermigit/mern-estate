import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import errorHandler from '../utils/error.js'
import jwt from 'jsonwebtoken'
 export const signup= async (req,res, next)=>{

 const {username, email, password} =req.body;
 const hashedPassword = bcryptjs.hashSync(password, 10);
 const newUser =  new User({username, email, password:hashedPassword});
try {
   await newUser.save();
   res.status(201).json("You saved new user!");  // Find where this messese gone on the browser
   
} catch (error) {
   next(error);
}

}


export const signin =  async (req, res ,next) => {
 const {email, password} = req.body;
try {
   // check if email exist on database
   const validuser = await User.findOne({ email });
   if (!validuser) return next (errorHandler(404, "User not found"));

   // check if password is correct
   const validPassword = await bcryptjs.compare(password, validuser.password);
   if (!validPassword) return next(errorHandler(401, "Wrong Credintials"));
   const token = jwt.sign({ _id: validuser._id }, process.env.JWT_SECRET)
   const { password: pass, ...others } = validuser._doc;
   res
   .cookie("access_token", token, { httpOnly: true })
   .status(200)
   .json(others);

} catch (error) {
   next(error);
}
}