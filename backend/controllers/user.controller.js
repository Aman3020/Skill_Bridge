import {User} from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const  register = async (req, res) =>{
    try{
        const {fullname, email, phoneNumber, password, role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                success: false
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User already exist with this email.",
                success:false
            })
        }
        const hashedPassword =  await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role
        })
        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })
    }  
    catch (err){
        console.log(err);
    }
}

export const login = async (req, res) =>{
    try{
        console.log("Hiii");
        const {email, password, role} = req.body;
        if(!email || !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                success: false
            })
        };
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"Incorrect email or password.",
                success:false,
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect email or password.",
                success:false,
            })
        };
        //check role is correct or not
        
        if(role != user.role){
            return res.status(400).json({
                message:"Role not matched.",
                success:false,
            })
        }

        const tokenData = {
            userId:user._id
        }
        //to generate the login in user token
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY,{expiresIn:'1d'});
        // storing the cookie of the user
        
        user = {
            _id: user._id,
            fullname: user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }

        return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
            message:`Welcome back ${user.fullname}`,
            user:user,
            success:true
        })

    }catch(error){
        console.log("Hiii");
        console.log(error)
    }
}

export const logout = async (req, res) => {
    try{
        return res.status(200).cookie("token","", {maxAge:0}).json({
            message:"Logout successfully",
            success:true
        });// expire the token
    }catch(error){
        console.log("LogOUt was Unsuccessful");
    }
}

export const updateProfile = async (req, res) =>{
    try{    
        const {fullname, email, phoneNumber, bio, skills} = req.body;
        const file = req.file;

        //cloudinary async here

        let skillsArray;
        if(skills){
            skillsArray= skills.split(",");
        } 
        const userId = req.id; 
        let user = await User.findById(userId);

        if(!user){
            return res.status(400).json({
                message:"User not found",
                success:false
            })
        }
        //updating data
        if(fullname) user.fullname = fullname;
        if(email) user.email = email;
        if(phoneNumber) user.phoneNumber = phoneNumber;
        if(bio) user.profile.bio =bio;
        if(skillsArray) user.profile.skills = skillsArray;

        //resume comes later here


        await user.save();
        user = {
            _id: user._id,
            fullname: user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }

        return res.status(200).json({ // fixed response
            message:"Profile updated successfully",
            user,
            success:true
        })

    }catch(error){
        console.log(error);
    }
}